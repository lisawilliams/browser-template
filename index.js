'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js')

// This code was from the solution branch of today's Bootstrap
// lesson, but it doesn't work, probably because it refers to api
// and config stuff we don't have yet.

// const config = require('./config')
//
// $(() => {
//   setAPIOrigin(location, config)
//   $('form').on('submit', function (event) {
//     event.preventDefault()
//     const input = $('#name').val()
//     console.log(input)
//     $('#newGame').modal('hide')
//   })
// })

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// styles
require('./assets/styles/index.scss')
