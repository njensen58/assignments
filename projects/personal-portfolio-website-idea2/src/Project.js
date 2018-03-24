import React from 'react';

class Project extends React.Component {
    constructor(){
        super();
        this.state = {
            dropDown: false
        }
        this.handleDisplayExpand = this.handleDisplayExpand.bind(this);
        this.handleImgOpen = this.handleImgOpen.bind(this);
    }

    handleDisplayExpand(){
        this.setState({
            dropDown: !this.state.dropDown ? true : false
        })
    }

    handleImgOpen(image){
        window.open(image, "img-view", "titlebar=no, menubar=no")
    }

    render(){
        return (
            <div className="projectContainer" onClick={this.handleDisplayExpand}>
                <h3 className="tileContainer">
                    <button
                        >
                        { this.state.dropDown === false ?
                        <i className="ion-chevron-down"></i>
                        :
                        <i className="ion-chevron-up"></i>
                        }
                    </button>{this.props.title}
                </h3>
                { this.state.dropDown === false ?
                    null
                    :
                <div>
                    <p className="projectDescription">{this.props.description}</p>
                    <div className="projectImgsDiv">
                        {this.props.imgs.map(image => <button onClick={()=>this.handleImgOpen(image)}><img src={image} alt=""/></button>)}
                    </div>
                    <div className="projectUrlBtnDiv">
                        <a href={this.props.url}>Visit Project</a>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default Project;
