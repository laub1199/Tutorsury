export const state = () => ({
  openFilter: false,
  data: {
    subjects: [
      {
        level: '小學',
        courses: ['全科', '功課輔導', '升班', '中文', '英文', '數學', '常識']
      },
      {
        level: '初中',
        courses: ['中文', '英文', '通識', '地理', '中史', '世史', '經濟', 'BAFS', '英語文學']
      },
      {
        level: '高中',
        courses: ['中文', '英文', '通識', '地理', '中史', '世史', '經濟', 'BAFS', '中國文學', '英語文學', '旅款', '資訊及通訊科技']
      },
      {
        level: '中學數理',
        courses: ['數學', 'M1', 'M2', '物理', '化學', '生物', '綜合科學（初中）', '綜合科學（高中）']
      }
    ],
    locations: [
      {
        area: '港島',
        districts: ['中西區', '灣仔區', '東區', '南區']
      },
      {
        area: '九龍',
        districts: ['深水埗區', '油尖旺區', '九龍城區', '黃大仙區', '觀塘區']
      },
      {
        area: '新界',
        districts: ['元朗區', '屯門區', '荃灣區', '葵青區', '離島區', '北區', '大埔區', '沙田區', '西貢區']
      }
    ],
    dates: [
      {
        day: '星期一',
        times: ['09:00 - 11:00', '12:00 - 15:00', '15:00 - 17:00', '18:00 - 21:00', '其他']
      },
      {
        day: '星期二',
        times: ['09:00 - 11:00', '12:00 - 15:00', '15:00 - 17:00', '18:00 - 21:00', '其他']
      },
      {
        day: '星期三',
        times: ['09:00 - 11:00', '12:00 - 15:00', '15:00 - 17:00', '18:00 - 21:00', '其他']
      },
      {
        day: '星期四',
        times: ['09:00 - 11:00', '12:00 - 15:00', '15:00 - 17:00', '18:00 - 21:00', '其他']
      },
      {
        day: '星期五',
        times: ['09:00 - 11:00', '12:00 - 15:00', '15:00 - 17:00', '18:00 - 21:00', '其他']
      },
      {
        day: '星期六',
        times: ['09:00 - 11:00', '12:00 - 15:00', '15:00 - 17:00', '18:00 - 21:00', '其他']
      },
      {
        day: '星期日',
        times: ['09:00 - 11:00', '12:00 - 15:00', '15:00 - 17:00', '18:00 - 21:00', '其他']
      }
    ]
  },
  filterChosen: {
    subject: {
      level: '',
      courses: []
    },
    location: {
      area: '',
      districts: []
    },
    date: {
      day: '',
      times: []
    },
    price: [0, 5000]
  }
})

export const mutations = {
  TOGGLE_FILTER (state) {
    state.openFilter = !state.openFilter
  },
  SET_FILTER (state, data) {
    if (!data.isPush) {
      state.filterChosen[data.layer1][data.layer2] = data.val
    } else {
      state.filterChosen[data.layer1][data.layer2].push(data.val)
    }
  },
  RESET_FILTER (state) {
    state.filterChosen = {
      subject: {
        level: '',
        courses: []
      },
      location: {
        area: '',
        districts: []
      },
      date: {
        day: '',
        times: []
      },
      price: [0, 5000]
    }
  },
  UPDATE_PRICE (state, data) {
    state.filterChosen.price = data.price
  }
}

export const actions = {
}

export const getters = {
  openFilter (state) {
    return state.openFilter
  },
  subjects (state) {
    return state.data.subjects
  },
  locations (state) {
    return state.data.locations
  },
  dates (state) {
    return state.data.dates
  },
  filterChosen (state) {
    return state.filterChosen
  },
  price (state) {
    return state.filterChosen.price
  }
}
