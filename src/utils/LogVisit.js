import {
  LogVisit
} from '@/api/visit'

function visit (url, type, name) {
  LogVisit({
    url: url,
    vtype: type,
    vname: name
  }).then(res => {
    if (res.Status !== 1) {
      // console.log(res.Message)
    }
  })
}

export default {
  visit
}
