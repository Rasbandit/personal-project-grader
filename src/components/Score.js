import React, { Component } from 'react';

class Score extends Component {
  constructor(props) {
    super(props);

    let { name,
      project,
      mentionTech,
      underTime,
      technical,
      overall,
      presentation,
      css,
      businessSolution,
      notes,
      id,
    } = props.values


    this.state = {
      name,
      project,
      mentionTech,
      underTime,
      technical,
      overall,
      presentation,
      css,
      businessSolution,
      notes,
      id
    }
  }

  updateState(prop, value) {
    const obj = {}
    obj[prop] = value;
    this.setState(obj, () => {
      this.props.update(this.state)
    });
  }

  render() {
    return (
      <div className="score">
        <input type="text" value={this.state.name} onChange={(e) => { this.updateState('name', e.target.value) }} />
        <input type="text" value={this.state.project} onChange={(e) => { this.updateState('project', e.target.value) }} />
        <select value={this.state.mentionTech} onChange={(e) => { this.updateState('mentionTech', 'true' === e.target.value) }}>
          <option value={true}>Mentioned</option>
          <option value={false}>Not Mentioned</option>
        </select>
        <select value={this.state.underTime} onChange={(e) => { this.updateState('underTime', 'true' === e.target.value) }}>
          <option value={true}>Under Time</option>
          <option value={false}>Over Time</option>
        </select>
        <select value={this.state.overall} onChange={(e) => { this.updateState('overall', parseInt(e.target.value)) }}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <select value={this.state.technical} onChange={(e) => { this.updateState('technical', parseInt(e.target.value)) }}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <select value={this.state.presentation} onChange={(e) => { this.updateState('presentation', parseInt(e.target.value)) }}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <select value={this.state.css} onChange={(e) => { this.updateState('css', parseInt(e.target.value)) }}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <select value={this.state.businessSolution} onChange={(e) => { this.updateState('businessSolution', parseInt(e.target.value)) }}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <input type="text" onChange={(e) => { this.updateState('notes', e.target.value) }} />
      </div >
    );
  }
}

export default Score;