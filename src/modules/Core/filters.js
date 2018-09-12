import moment from 'moment'

/**
 * @return {string}
 */
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

/**
 * @return {string}
 */
function CEPFilter (CEP) {
  if (CEP) {
    return CEP.slice(0, 5) + '-' + CEP.slice(5)
  }
  return ''
}

/**
 * @return {string}
 */
function DocumentFilter (document) {
  if (document) {
    if (document.length > 13) {
      return document.slice(0, 2) + '.' + document.slice(2, 5) + '.' + document.slice(5, 8) + '/' + document.slice(8, 12) + '-' + document.slice(12, 14)
    } else {
      return document.slice(0, 3) + '.' + document.slice(3, 6) + '.' + document.slice(6, 9) + '-' + document.slice(9)
    }
  }
  return ''
}

/**
 * @return {string}
 */
function DateFilter (date) {
  return date ? parseDate(date).format('DD/MM/YYYY') : ''
}

/**
 * @return {string}
 */
function HourFilter (date) {
  return parseDate(date).format('HH:mm')
}

function parseDate (date) {
  return moment(date, 'YYYY-MM-DD[T]HH:mm:ss')
}

export {PhoneFilter, CEPFilter, DocumentFilter, DateFilter, HourFilter}
