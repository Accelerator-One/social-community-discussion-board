// Environment dependencies
import React from 'react';

// Material component(s)
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red, purple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

// Card component(s)
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

// Icon component(s)
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Asset(s)
import Comment from './Comment.js';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '600px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: purple[500],
    fontSize: 'large',
    padding: '1em'
  }
}));

/**
 * Post component (default) for main panel
 * @param {{ data:any, updateLiked:function, insertComment:function }}:any param 
 * @returns JSX.Element
 */
export default function Post({ data, updateLiked, insertComment, name }) {

  // console.log(data, updateLiked, insertComment);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(data.liked);

  // expand click handler
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // comment submit handler
  const submitComment = (evt) => {

    if (evt.code === 'Enter') {

      let timestamp = Date.now();
      let comment = evt.target.value;

      insertComment(name, timestamp, comment);
      evt.target.value = "";
      setExpanded(true);

    }
  };

  // returns parsed date
  function parser(time) {
    let arr = Date(time).split(' ');
    return arr[1] + " " + arr[2] + ", " + arr[3];
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {data.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.name}
        subheader={parser(data.timestamp)}
      />

      <CardMedia
        className={classes.media}
        image={data.image}
        title={data.name}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.content}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>

        <IconButton aria-label="like" onClick={() => { updateLiked(); setLiked(!liked); }}>
          <FavoriteIcon style={(liked) ? { "color": red[500] } : {}} />
        </IconButton>

        <TextField
          variant={'outlined'}
          size={'small'}
          fullWidth={true}
          placeholder='Add comment here...'
          style={{ 'maxWidth': '480px' }}
          onKeyUp={(evt) => submitComment(evt)}>
        </TextField>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>

      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {
            // Comments list
            data.comments.map(({ timestamp, name, comment }) => {
              return (
                <span key={timestamp}>
                  <br />
                  <Comment uid={timestamp} name={name} message={comment} />
                  <br />
                </span>
              );
            })
          }
          <br />
        </CardContent>
      </Collapse>

    </Card>
  );
}
