import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
    class Authentication extends Component {
        // static -> class level property
        //eg. Authentication.contextType
        static contextTypes = {
            // if we want access to our router
            // we need to say ahead of time that 
            // ther is going to be a router property
            // which we want access to and it is going
            // to be of type object
            router: React.PropTypes.object  //of type object
        }
        
        componentWillMount(){
            if(!this.props.authenticated){
                this.context.router.push("/");
            }
        }

        // whenever component is about to
        // be handed a new set of props or be 
        // rerendered
        // nextProps -> next set of props the
        // component will be rendered with
        componentWillUpdate(nextProps){
            if(!nextProps.authenticated){
                this.context.router.push("/");
            }
        }

        render() { 
            //console.log(this.context);
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.authenticated }
    }
    return connect(mapStateToProps)(Authentication);
}
