import './App.css';
import Form from './components/Form';

function App() {
  return (
    <main className='relative flex min-h-screen flex-col items-center text-content bg-primary theme-dark'>
      <section className='w-full min-h-screen relative flex flex-col justify-center items-center text-center'>
        <Form />
      </section>
    </main>
  );
}

export default App;
