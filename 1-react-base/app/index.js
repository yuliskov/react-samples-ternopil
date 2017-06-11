import React from 'react'
import ReactDOM from 'react-dom'
require('./index.styl')

const users = [{
    "id": "53331f585e986b0712f00000",
    "username": "listochkin",
    "displayName": "Андрей Листочкин (Andrey Listochkin)",
    "url": "/listochkin",
    "avatarUrl": "https://avatars-staging-01.gitter.im/gh/uv/3/listochkin",
    "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/405222?v=3&s=60",
    "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/405222?v=3&s=128",
    "role": "admin",
    "v": 284,
    "gv": "3"
}, {
    "id": "5478889fdb8155e6700d9096",
    "username": "lavriv92",
    "displayName": "Ivan Lavriv",
    "url": "/lavriv92",
    "avatarUrl": "https://avatars-staging-01.gitter.im/gh/uv/3/lavriv92",
    "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/2587946?v=3&s=60",
    "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/2587946?v=3&s=128",
    "v": 7,
    "gv": "3"
}, {
    "id": "547c79d9db8155e6700d9ee6",
    "username": "yaapis",
    "displayName": "YAAP",
    "url": "/yaapis",
    "avatarUrl": "https://avatars-staging-03.gitter.im/gh/uv/3/yaapis",
    "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/390195?v=3&s=60",
    "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/390195?v=3&s=128",
    "v": 7,
    "gv": "3"
}, {
    "id": "54909a94db8155e6700dfe7f",
    "username": "vladgolubev",
    "displayName": "Vlad Holubiev",
    "url": "/vladgolubev",
    "avatarUrl": "https://avatars-staging-03.gitter.im/gh/uv/3/vladgolubev",
    "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/3817380?v=3&s=60",
    "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/3817380?v=3&s=128",
    "v": 9,
    "gv": "3"
}, {
    "id": "55408a2015522ed4b3dfab7f",
    "username": "YuriiMA",
    "displayName": "YuriiMA",
    "url": "/YuriiMA",
    "avatarUrl": "https://avatars-staging-02.gitter.im/gh/uv/3/YuriiMA",
    "avatarUrlSmall": "https://avatars0.githubusercontent.com/u/12166242?v=3&s=60",
    "avatarUrlMedium": "https://avatars0.githubusercontent.com/u/12166242?v=3&s=128",
    "v": 6,
    "gv": "3"
}, {
    "id": "555e610f15522ed4b3e0c169",
    "username": "terrysahaidak",
    "displayName": "Terry Sahaidak",
    "url": "/terrysahaidak",
    "avatarUrl": "https://avatars-staging-04.gitter.im/gh/uv/3/terrysahaidak",
    "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/7809008?v=3&s=60",
    "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/7809008?v=3&s=128",
    "v": 32,
    "gv": "3"
}, {
    "id": "55e1957e0fc9f982beaefe03",
    "username": "AndriySikora",
    "displayName": "Andy",
    "url": "/AndriySikora",
    "avatarUrl": "https://avatars-staging-01.gitter.im/gh/uv/3/AndriySikora",
    "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/13138743?v=3&s=60",
    "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/13138743?v=3&s=128",
    "v": 9,
    "gv": "3"
}, {
    "id": "56c07e59e610378809c15cec",
    "username": "CandyOgre",
    "displayName": "Maksim Romanyuk",
    "url": "/CandyOgre",
    "avatarUrl": "https://avatars-staging-01.gitter.im/gh/uv/3/CandyOgre",
    "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/8741333?v=3&s=60",
    "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/8741333?v=3&s=128",
    "v": 23,
    "gv": "3"
}, {
    "id": "570ffa7a187bb6f0eadf7ea6",
    "username": "zalesky",
    "displayName": "zalesky",
    "url": "/zalesky",
    "avatarUrl": "https://avatars-staging-03.gitter.im/gh/uv/3/zalesky",
    "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/16255408?v=3&s=60",
    "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/16255408?v=3&s=128",
    "v": 15,
    "gv": "3"
}, {
    "id": "5734d7adc43b8c6019729787",
    "username": "uapasha",
    "displayName": "Paul",
    "url": "/uapasha",
    "avatarUrl": "https://avatars-staging-02.gitter.im/gh/uv/3/uapasha",
    "avatarUrlSmall": "https://avatars0.githubusercontent.com/u/17516160?v=3&s=60",
    "avatarUrlMedium": "https://avatars0.githubusercontent.com/u/17516160?v=3&s=128",
    "v": 10,
    "gv": "3"
}, {
    "id": "57c1ab9940f3a6eec0619dee",
    "username": "jestersunborn",
    "displayName": "Serhiy Boreyko",
    "url": "/jestersunborn",
    "avatarUrl": "https://avatars-staging-05.gitter.im/gh/uv/3/jestersunborn",
    "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/11788629?v=3&s=60",
    "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/11788629?v=3&s=128",
    "v": 9,
    "gv": "3"
}, {
    "id": "57ebcd8340f3a6eec067d2ab",
    "username": "dalligieri",
    "displayName": "Deren' Andriy",
    "url": "/dalligieri",
    "avatarUrl": "https://avatars-staging-05.gitter.im/gh/uv/3/dalligieri",
    "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/2292088?v=3&s=60",
    "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/2292088?v=3&s=128",
    "gv": "3"
}, {
    "id": "581099e0d73408ce4f30f55c",
    "username": "Timak31",
    "displayName": "Timak31",
    "url": "/Timak31",
    "avatarUrl": "https://avatars-staging-01.gitter.im/gh/uv/3/Timak31",
    "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/19564100?v=3&s=60",
    "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/19564100?v=3&s=128",
    "v": 2,
    "gv": "3"
}, {
    "id": "582623a1d73408ce4f353cee",
    "username": "movasyl",
    "displayName": "Vasyl Kovbassa",
    "url": "/movasyl",
    "avatarUrl": "https://avatars-staging-04.gitter.im/gh/uv/3/movasyl",
    "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/14804982?v=3&s=60",
    "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/14804982?v=3&s=128",
    "v": 4,
    "gv": "3"
}, {
    "id": "5827296bd73408ce4f355d67",
    "username": "innnes",
    "displayName": "innnes",
    "url": "/innnes",
    "avatarUrl": "https://avatars-staging-05.gitter.im/gh/uv/3/innnes",
    "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/23419434?v=3&s=60",
    "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/23419434?v=3&s=128",
    "gv": "3"
}, {
    "id": "5828487fd73408ce4f358157",
    "username": "AndrewHamster",
    "displayName": "AndrewHamster",
    "url": "/AndrewHamster",
    "avatarUrl": "https://avatars-staging-01.gitter.im/gh/uv/3/AndrewHamster",
    "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/15845550?v=3&s=60",
    "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/15845550?v=3&s=128",
    "v": 1,
    "gv": "3"
}, {
    "id": "582c9d46d73408ce4f3656f5",
    "username": "Priorko",
    "displayName": "Priorko",
    "url": "/Priorko",
    "avatarUrl": "https://avatars-staging-05.gitter.im/gh/uv/3/Priorko",
    "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/3463023?v=3&s=60",
    "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/3463023?v=3&s=128",
    "v": 1,
    "gv": "3"
}, {
    "id": "582ebdf3d73408ce4f36ccda",
    "username": "OlyaKarpa",
    "displayName": "Olya ",
    "url": "/OlyaKarpa",
    "avatarUrl": "https://avatars-staging-03.gitter.im/gh/uv/3/OlyaKarpa",
    "avatarUrlSmall": "https://avatars1.githubusercontent.com/u/19406013?v=3&s=60",
    "avatarUrlMedium": "https://avatars1.githubusercontent.com/u/19406013?v=3&s=128",
    "gv": "3"
}, {
    "id": "58d9562fd73408ce4f54156b",
    "username": "StoikovOleh",
    "displayName": "O_Stoikov",
    "url": "/StoikovOleh",
    "avatarUrl": "https://avatars-staging-03.gitter.im/gh/uv/3/StoikovOleh",
    "avatarUrlSmall": "https://avatars2.githubusercontent.com/u/17726380?v=3&s=60",
    "avatarUrlMedium": "https://avatars2.githubusercontent.com/u/17726380?v=3&s=128",
    "gv": "3"
}]

// https://github.com/bevacqua/fuzzysearch
function fuzzysearch (needle, haystack) {
  let hlen = haystack.length
  let nlen = needle.length
  if (nlen > hlen) {
    return false
  }
  if (nlen === hlen) {
    return needle === haystack
  }
  outer: for (var i = 0, j = 0; i < nlen; i++) {
    let nch = needle.charCodeAt(i)
    while (j < hlen) {
      if (haystack.charCodeAt(j++) === nch) {
        continue outer
      }
    }
    return false
  }
  return true
}

const SearchInput = ({value, onChange}) => (
  <div className="searchContainer">
    <input
      placeholder="Type your search query..."
      value={value}
      onChange={evt => onChange(evt)} />
  </div>
)

const UserList = ({data}) => (
  <div>{data.map(item => <User {...item} key={item.id} />)}</div>
)

const Avatar = ({src}) => (
  <img className="avatar" src={src} />
)

const User = ({id, displayName, username, avatarUrlSmall}) => (
  <Row className="userItem">
    <div className="avatarContainer">
      <Avatar src={avatarUrlSmall} />
    </div>
    <div>
      <div>{displayName}</div>
      <div>@{username}</div>
    </div>
  </Row>
)

const Row = ({children, className}) => (
  <div className={`row ${className || ''}`}>{children}</div>
)

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleOnChange = this.handleOnChange.bind(this)

    this.state = {
      value: '',
      isLoading: true,
      data: [],
      filtered: [],
      showFiltered: false
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      data: users,
      isLoading: false
    }), 1001)
  }

  handleOnChange({target: {value}}) {
    if (!value.trim().length) {
      this.setState({
        value,
        filtered: [],
        showFiltered: false
      })
    } else {
      const filtered = this.state.data.filter(item =>
        fuzzysearch(value, item.username) ||
        fuzzysearch(value, item.displayName)
      )

      this.setState({
        value,
        filtered,
        showFiltered: true
      })
    }
  }

  renderSearchInput() {
    const {value} = this.state
    return (
      <SearchInput
        ref="asd"
        onChange={this.handleOnChange}
        value={value} />
    )
  }

  renderUsers() {
    const {isLoading, data, filtered, showFiltered} = this.state
    return isLoading ? <div>Loading...</div> : (
      <UserList data={showFiltered ? filtered : data} />
    )
  }

  render() {
    const {value} = this.state
    return (
      <div className="appContainer">
        {this.renderSearchInput()}
        {this.renderUsers()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
