import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
import useStyles from './style'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Post = ({post, setCurrentId}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if(post.likes.length > 0){
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))? (
                <> <FavoriteIcon sx={{color: 'red'}} fontSize="small" />&nbsp;{post.likes.length}</>
            ) : (
                <><FavoriteBorderIcon sx={{color: 'red'}} fontSize="small" />&nbsp;{post.likes.length}</>
            );
        }
        return <><FavoriteBorderIcon sx={{color: 'red'}} fontSize='small' /> </>
    }
    return(
        <Card  className = {classes.card}>
            <CardMedia className = {classes.media} image={post.selectedFile} title = {post.title}/>
            <div className={classes.flexContainer}>
                <div className = {classes.overlay}>
                    <Typography variant = "h6">{post.name}</Typography>
                    <Typography variant = "body2">{moment(post.createdAt).fromNow()}</Typography>
                </div> 
                <div className = {classes.overlay2}>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <Button style={{color:"white"}} size="small" onClick={()=>setCurrentId(post._id)}>
                        <MoreHorizIcon fontSize = "default"/>
                    </Button>)}
                </div>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="purple">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h6" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography className={classes.messages}variant="body2" color= "black" component= "p">{post.message}</Typography>
            </CardContent>
            <CardActions className = {classes.cardActions}>
                <Button size="small"  disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
                    <Likes/>
                </Button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                <Button size="small" color="rgb(202, 143, 202)" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize = "small"/>
                </Button>)}
            </CardActions>
        </Card>
    );
}

export default Post;