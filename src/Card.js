import React from 'react';

class Card extends React.Component {
    state = { show: 'Front' }

    toggleShow = () => {
        let show =this.state.show === 'Front' ? 'Back' : 'Front'
        this.setState({ show });
    }
    
    render() {
        let { show } = this.state;
        return (
            <div>
                <div>
                    { this.props.card.question }
                    { show === "Back"? this.props.card.answer:""}
                </div>
                <button onClick={this.toggleShow}>Flip</button>
            </div>

        )
    }
 }
    export default Card;