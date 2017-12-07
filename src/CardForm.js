import React from 'react';

class CardForm extends React.Component {
  state = { question: '', answer: '', nextId: 1 }

  handleSubmit = (e) => {
    e.preventDefault();
    const { question, answer, nextId } = this.state;
    const card = { question, answer, id: nextId }
    this.setState({ question: '', answer: '', nextId: nextId + 1 });
    this.props.addCard(card);
  }

  handleChangeQuestion = (e) => {
    this.setState({ question: e.target.value })
  }

  handleChangeAnswer = (e) => {
    this.setState({ answer: e.target.value })
  }

  render() {
    const { question, answer } = this.state;

    return(
      <form >
        <input value={question} label="Enter the question" onChange={this.handleChangeQuestion} />
        <input value={answer} label="Enter the answer" onChange={this.handleChangeAnswer} />
        <button onClick = {this.handleSubmit}>Submit</button>
      </form>

    )
  }
}

export default CardForm;