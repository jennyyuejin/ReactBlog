import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions/index';



class IndexPage extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('IndexPage willMount.');
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map( post => {
            return (
                <li className="list-group-item" key={post.id} >
                    <Link to={"posts/" + post.id } >
                        <span className="pull-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary" >
                        Add a Post
                    </Link>
                </div>

                <h3>Posts</h3>
                <ul className="list-group">
                    { this.renderPosts() }
                </ul>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(IndexPage);