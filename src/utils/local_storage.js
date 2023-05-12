export const LS_KEY = "vacancy-viewer-stars"

export const isInLocalStorage = (vacancyId) => {
  const starsArray = JSON.parse(localStorage.getItem(LS_KEY))
  if (starsArray) {
    return starsArray.some(el => el.id === vacancyId)
  }
}

export const updateLocalStorage = (vacancy, setStarred) => {
  const vacancyLite = {
    id: vacancy.id, profession: vacancy.profession,
    payment_from: vacancy.payment_from, currency: vacancy.currency,
    type_of_work: { title: vacancy.type_of_work.title }, town: { title: vacancy.town.title }
  }

  let starsArray = JSON.parse(localStorage.getItem(LS_KEY))
  if (starsArray) {
    const index = starsArray.findIndex(el => el.id === vacancy.id)
    if (index > -1) {
      starsArray.splice(index, 1)
      setStarred(false)
    } else {
      starsArray.push(vacancyLite)
      setStarred(true)
    }
  } else {
    starsArray = [vacancyLite]
    setStarred(true)
  }
  localStorage.setItem(LS_KEY, JSON.stringify(starsArray))
}