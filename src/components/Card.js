import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Card extends Component {
    
    getStyle = () => {
        return {
            padding: '0.7em',
            width: '90%',
            margin: '0.5em',
            fontSize: '1.2em',
            backgroundColor: (this.props.card.flip) ? '#ccebdb' : '#3cf093'
        }
    }
    
    render() {
        return (
            <button onClick={this.props.flipCard.bind(this, this.props.card.id)} style={this.getStyle()}>
                <p>{ (this.props.card.flip) ? this.props.card.korean : this.props.card.english}{' '}</p>
            </button>
        )
    }
}

Card.propTypes = {
    card: PropTypes.object.isRequired
}

export default Card
