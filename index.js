'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
// require('./assets/scripts/index.js')

const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
  $('form').on('submit', function (event) {
    event.preventDefault()
    const input = $('#name').val()
    console.log(input)
    $('#myModal').modal('hide')
  })
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// styles
// require('./assets/styles/index.scss')

// styles
// require('./assets/styles/index.scss')
