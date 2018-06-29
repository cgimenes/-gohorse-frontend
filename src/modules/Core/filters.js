function PhoneFilter (phone) {
  if (phone) {
    if (phone.length > 10) {
      return '(' + phone.slice(0, 2) + ') ' + phone.slice(2, 3) + ' ' + phone.slice(3, 7) + '-' + phone.slice(7)
    } else {
      return '(' + phone.slice(0, 2) + ') ' + phone.slice(2, 6) + '-' + phone.slice(6)
    }
  }
  return ''
}

function CEPFilter (CEP) {
  if (CEP) {
    return CEP.slice(0, 5) + '-' + CEP.slice(5)
  }
  return ''
}

function DocumentFilter (document) {
  if (document) {
    if (document.length > 13) {
      return document.slice(0, 2) + '.' + document.slice(2, 5) + '.' + document.slice(5, 8) + '/' + document.slice(8,11) + '-' + document.slice(11, 13)
    }else{
      return document.slice(0, 3) + '.' + document.slice(3, 6) + '.' + document.slice(6, 9) + '-' + document.slice(9)
    }
  }
  return ''
}

function DateFilter (date) {
  if (date) {
    return date.slice(8, 10) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4)
  }
  return ''
}

export {PhoneFilter, CEPFilter, DocumentFilter, DateFilter}
