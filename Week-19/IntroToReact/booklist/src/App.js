import './App.css';
import BookList1 from './components/BookList/BookList1';
import BookList2 from './components/BookListAndBook/BookList2';

function App() {
  return (
    <>
      <div>BookList - 1</div>
      <BookList1/>
      <br/>
      <div>BookList - 2</div>
      <BookList2/>
    </>
  );
}

export default App;
