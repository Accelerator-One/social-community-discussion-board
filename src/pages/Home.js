// Environment dependencies
import React from 'react';

// Material component(s)
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { blue } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

// Nested component(s)
import Post from '../cmp/Post.js';
import Avatar from '@material-ui/core/Avatar';

// Redux store connection
import { connect } from 'react-redux';

/**
 * Implementation for Home panel component
 */
class Home extends React.Component {

  render() {

    const styles = {
      padding: {
        'padding': '2em',
      },
      avatar: {
        backgroundColor: blue[500],
        fontSize: 'xxx-large',
        padding: '1em'
      },
      center: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
    };

    return (
      <>
        <br />
        <Grid container spacing={6}>

          <Grid item xs={12} sm={4} style={styles.padding}>

            <Paper style={{ ...styles.padding, ...styles.center }} spacing={2}>

              <Avatar variant={"circle"} style={styles.avatar}> {this.props.user.name[0]} </Avatar>

              <Typography>
                <br />
                {this.props.user.name}
                <hr />
              </Typography>

              <p style={{ 'textAlign': 'center' }}>
                {this.props.user.about}
              </p>

            </Paper>

          </Grid>

          <Grid item xs={12} sm={8} style={styles.padding}>

            {
              // Listing posts
              this.props.posts.map(data => {
                return <Post key={data.timestamp}
                  data={data}
                  name={this.props.user.name}
                  updateLiked={this.props.updateLiked}
                  insertComment={this.props.addComment}
                />
              })
            }

          </Grid>
        </Grid>
      </>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

const dispatchStateToProps = (dispatch) => {
  return {
    updateLiked: () => { dispatch({ type: {}, action: "UPDATE_LIKED" }) },
    addComment: (name, timestamp, comment) => { dispatch({ type: { name, timestamp, comment }, action: "INSERT_COMMENT" }) }
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(Home);
