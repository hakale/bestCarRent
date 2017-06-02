import React, { Component, PropTypes } from "react"

const isDefined = x => typeof x !== "undefined"
const isCase = x => x instanceof Case
const isCaseArray = x => (x instanceof Array) && x.filter(isCase).indexOf(false) === -1

export var Case = React.createClass( {
   propTypes = {
    value: PropTypes.any,
    values: PropTypes.any
  }

  render() {
    const { children } = this.props;
    return children;
  }
})

export var Switch = React.createClass( {
  static propTypes = {
    condition: PropTypes.any.isRequired
  }

   select(condition, cases) {
    for (let i = 0; i < cases.length; i++) {
      const c = cases[i];
      const { value, values } = c.props;
      if (isDefined(values) && values.indexOf(condition) > -1) {
        return c
      } else if (isDefined(value) && value === condition) {
        return c
      }
    }

    return null
  }

   getCases(children) {
    if (isCaseArray(children)) {
      return children
    } else if (isCase(children)) {
      return [children]
    } else {
      const name = children.constructor.name
      throw new TypeError(`Expected instance of Case but got ${name}`)
    }
  }

  render() {
    const { children, condition } = this.props;
    const cases = Switch.getCases(children)
    const result = Switch.select(condition, cases)
    return result
  }
})
