// automatically pick platform
const say = require('say')

// or, override the platform
// const Say = require('say').Say
// const say = new Say('darwin' || 'win32' || 'linux')

// Use default system voice and speed
// say.speak('SOMEBODY!')
// say.speak("What's up, dog?", 'Alex', 0.5)
// Fire a callback once the text has completed being spoken
say.speak("What's up, dog?", 'Samantha', 1.0, (err) => {
    if (err) {
      return console.error(err)
    }
  
    console.log('Text has been spoken.')
  });
  