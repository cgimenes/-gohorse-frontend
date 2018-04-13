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

function CPFFilter (CPF) {
  if (CPF) {
    return CPF.slice(0, 3) + '.' + CPF.slice(3, 6) + '.' + CPF.slice(6, 9) + '-' + CPF.slice(9)
  }
  return ''
}

function DateFilter (date) {
  if (date) {
    return date.slice(8, 10) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4)
  }
  return ''
}

export {PhoneFilter, CEPFilter, CPFFilter, DateFilter}
