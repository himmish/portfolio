/* ./pages/index.js               */
import Head from 'next/head';
import { Navbar } from '../components/Navbar';

export default function Home() {
    return(
    <div>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      
    <div className="container">
        <section class="component bg-gray-900 p-2 w-full ">
		    <blockquote class="relative text-white text-center p-10 w-full m-1">
            <svg class="absolute top-5 left-5 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700" width="16" height="6" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"/>
            </svg>
			Sometimes all you need to do is change your perspective
		    </blockquote>
	    </section>
      <main>

        <p className='description'>
        </p>
        <div class='h-15 flex m-3'>
        <h3 className='inline-flex p-3 text-xl h-2/3 w-1/4'>
          Links
        </h3>

        <a href="https://leetcode.com/him500/" class=" inline-flex border border-gray-300 rounded-md p-2 m-1 h-2/3 hover:border hover:border-orange-400">
            <h2 className='text-xl font-medium text-amber-600'>Leetcode</h2>
        </a>

        <a href="https://twitter.com/himansh37398221" class=" inline-flex border border-gray-300 rounded-md p-2 m-1 h-2/3 hover:border hover:border-blue-300">
            <h2 className='text-xl font-medium text-blue-600'>Twitter</h2>
        </a>

        <a href="https://github.com/himmish" class=" inline-flex rounded-md border border-gray-300 p-2 m-1 h-2/3 hover:border hover:border-gray-900">
            <h2 className='text-xl font-medium text-gray-800'>Github</h2>
        </a>
        </div>
        <p className="description">
          My Projects
        </p>

        <div className="grid">
          <a href="https://github.com/himmish/chess-game-engine" className="card">
            <h3>Chess &rarr;</h3>
            <p>Play random Chess moves lib used <code>Chessboardjsx</code>+<code>Chessjs</code> </p>
          </a>

          <a href="https://github.com/himmish/Fullstack-Dev-TodoList" className="card">
            <h3>TodoList &rarr;</h3>
            <p>A simple todolist app built using <code>Django</code>+<code>Bootstrap</code></p>
          </a>

        </div>
      </main>
      </div>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding:0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        .component {
		font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
	}

	blockquote {
		background:
			linear-gradient(to right, #039be5 6px, transparent 4px) 0 100%,
			linear-gradient(to left, #039be5 6px, transparent 4px) 100% 0,
			linear-gradient(to bottom, #039be5 6px, transparent 4px) 100% 0,
			linear-gradient(to top, #039be5 6px, transparent 4px) 0 100%;
		background-repeat: no-repeat;
		background-size: 20px 20px;
	}

	blockquote:before,
	blockquote:after {
		font-family: FontAwesome;
		position: absolute;
		color: #039be5;
		font-size: 34px;
	}

	blockquote:before {
		content: "\f10d";
		top: -12px;
		margin-right: -20px;
		right: 100%;
	}

	blockquote:after {
		content: "\f10e";
		margin-left: -20px;
		left: 100%;
		top: auto;
		bottom: -20px;
	}
      `}</style>
 
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
