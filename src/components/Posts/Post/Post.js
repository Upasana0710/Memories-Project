import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
import useStyles from './style'
import FavoriteIcon from '@mui/icons-material/Favorite';

const Post = ({post, setCurrentId}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    return(
        <Card  className = {classes.card}>
            <CardMedia className = {classes.media} image={post.selectedFile} title = {post.title}/>
            <div className={classes.flexContainer}>
                <div className = {classes.overlay}>
                    <Typography variant = "h6">{post.creator}</Typography>
                    <Typography variant = "body2">{moment(post.createdAt).fromNow()}</Typography>
                </div> 
                <div className = {classes.overlay2}>
                    <Button style={{color:"white"}} size="small" onClick={()=>setCurrentId(post._id)}>
                        <MoreHorizIcon fontSize = "default"/>
                    </Button>
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
                <Button size="small" color="black" onClick={() => dispatch(likePost(post._id))}>
                    <FavoriteIcon fontSize = "small"/>
                    &nbsp;Like &nbsp;
                    {post.likeCount};
                </Button>
                <Button size="small" color="rgb(202, 143, 202)" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize = "small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;