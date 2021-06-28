const wait = (data, time) => new Promise(resolve => {
  setTimeout(() => {
    resolve(data)
  }, time)
})

export default {
  data: [
    {
      id: 'v1',
      label: 'John',
      color: 'black',
      info: wait('I am john!', 3000)
    }, {
      id: 'v2',
      label: 'Paul',
      color: 'black',
      info: 'I am Paul!'
    }, {
      id: 'v3',
      label: 'Jimmy',
      color: 'black',
      info: wait('I am Jimmy!', 2000)
    }, {
      id: 'v4',
      label: 'David',
      color: 'black',
      info: 'I am David!'
    }, {
      id: 'e1',
      label: 'John -> Paul',
      color: 'blue',
      info: 'Cold!',
      source: 'v1',
      target: 'v2'
    }, {
      id: 'e2',
      label: 'Paul -> Jimmy',
      color: 'yellow',
      info: wait('Warm!', 1000),
      source: 'v2',
      target: 'v3'
    }, {
      id: 'e3',
      label: 'Paul -> David',
      color: 'red',
      info: 'Very close!',
      source: 'v2',
      target: 'v4'
    }, {
      id: 'e4',
      label: 'Wrong Edge',
      color: 'red',
      info: 'It must be excluded!',
      source: 'v2',
      target: 'v5'
    }
  ]
}
