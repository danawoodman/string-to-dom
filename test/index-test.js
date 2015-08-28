/* eslint no-unused-expressions:0 */

import stringToDom from '../src/index'

describe('stringToDom', () => {

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should have a sane default', () => {
    const elm = stringToDom(`
      <div class="foo">
        <h1 id="bar">Hello!</h1>
      </div>
    `)
    expect(elm).to.exist
    expect(document.getElementById('bar').textContent).to.eql('Hello!')
  })

  it('should handle passing in a target', () => {
    // Create a container element to put the
    // element
    const container = document.createElement('div')
    container.id = 'container'
    document.body.appendChild(container)

    const elm = stringToDom('<p>Hello</p>', container)
    expect(elm).to.exist
    expect(document.getElementById('container').textContent).to.eql('Hello')
  })

  it('should throw if invalid HTML string is passed in', () => {
    expect(function () {
      stringToDom('</bad-dom>')
    }).to.throw(TypeError)
  })

  it('should throw on invalid target', () => {
    expect(function () {
      stringToDom('<span></span>', 'bad-target...')
    }).to.throw(TypeError)
  })
})
