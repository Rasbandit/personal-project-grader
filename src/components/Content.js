import React, { Component } from 'react';
import Score from './Score'

class Content extends Component {
  constructor(props) {
    super(props);

    let scores = JSON.parse(localStorage.getItem('scores')) || []


    this.state = {
      scores,
      filterBy: 'overall'
    }
  }

  createEntry = () => {
    const newEntry = {
      name: '',
      project: '',
      mentionTech: true,
      underTime: true,
      technical: 0,
      overall: 0,
      presentation: 0,
      css: 0,
      businessSolution: 0,
      notes: '',
      id: Date.now()
    }
    this.setState({ scores: [newEntry, ...this.state.scores] }, () => {
      localStorage.setItem('scores', JSON.stringify(this.state.scores))
    }
    )
  }

  updateEntry = (updatedScore) => {
    let scoresCopy = [...this.state.scores];
    const updatedScores = scoresCopy.map(score => updatedScore.id === score.id ? updatedScore : score)
    this.setState({ scores: updatedScores }, () => {
      localStorage.setItem('scores', JSON.stringify(this.state.scores))
    })
  }

  render() {
    console.log(this.state);
    const entries = this.state.scores.map(score => (
      <Score values={score} update={this.updateEntry} key={score.id} />
    ))
    const ordered = this.state.scores.sort((a, b) => b[this.state.filterBy] > a[this.state.filterBy])
    console.log(ordered);
    return (
      <div>
        <button onClick={this.createEntry}>Add Entry</button>
        <div className="score">
          <div className="div">Name</div>
          <div className="div">Project</div>
          <div className="div">Mention Tech</div>
          <div className="div">Time</div>
          <div className="div">Overall </div>
          <div className="div">Technical</div>
          <div className="div">Presentation</div>
          <div className="div">Css</div>
          <div className="div">Business</div>
          <div className="div">Notes</div>
        </div>

        {entries}
        <h1>Ordered Results</h1>
        <select value={this.state.filterBy}
          onChange={(e) => { this.updateFilter(e.target.value) }}
        >
          <option value={'overall'}>Overall</option>
          <option value={'technical'}>Technical</option>
          <option value={''}>Presentation</option>
          <option value={4}>Css</option>
          <option value={5}>Business</option>
        </select>
      </div>
    );

  }
}

export default Content;