import React from 'react'

class WorkTemplate extends React.Component {
  render() {

    const {route} = this.props
    const work = route.page.data

    return (
      <section>
        <h1>{ work.title }</h1>
        <div dangerouslySetInnerHTML={{ __html: work.body }} />
      </section>
    )
  }
}

WorkTemplate.propTypes = {
  route: React.PropTypes.object.isRequired
}

export default WorkTemplate