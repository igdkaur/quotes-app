import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Jorge Luis Borges',
    text: 'Donot talk unless you can improve the silence.',
  },
  {
    id: 'q2',
    author: 'Henning Mankell',
    text: '“You forget what you want to remember and remember what you would prefer to forget.” ',
  },
  {
    id: 'q3',
    author: ' Janet Evanovich',
    text: 'Romance novels are birthday cake and life is often peanut butter and jelly. I think everyone should have lots of delicious romance novels lying around for those times when the peanut butter of life gets stuck to the roof of your mouth.',
  },
  ]

const AllQuotes = () => {
 return <QuoteList quotes = {DUMMY_QUOTES} />
}

export default AllQuotes;