import React, {useState} from 'react';
import {UsersTypes} from './type.ts';
import users from '../../assets/users.svg';
import userIcon from '../../assets/users.svg';
import notRepoIcons from '../../assets/not-repo-icons.svg';
import EmptyResult from "../EmptyResult/EmptyResult.tsx";

interface UserProps {
  data: UsersTypes;
}

const UserComponent: React.FC<UserProps> = ({data}) => {
  const {user, public_reports} = data;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(public_reports.length / itemsPerPage);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = Math.min(startIdx + itemsPerPage, public_reports.length);
  const currentRepos = public_reports.slice(startIdx, endIdx);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1, 2, 3);
      if (currentPage > 3 && currentPage < totalPages - 2) {
        pageNumbers.push('...', currentPage, '...');
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push('...', totalPages - 2, totalPages - 1);
      } else {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };
  console.log(currentRepos);
  return (
  <div className="flex bg-blue-50 min-w-[900px]">
    <div className="p-14 pr-0 min-w-96">
      <img src={user.avatar_url} alt="User avatar" className="rounded-full h-72 w-72 mb-2"/>
      <h2 className="md:font-bold text-3xl mb-1">{user.name}</h2>
      <a
      href={user.html_url}
      target="_blank"
      rel="noreferrer"
      className="text-blue-600 mb-6 inline-block"
      >
        {user.login}
      </a>
      <p className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <img src={users} alt="Users" className=""/>
            {user.followers} followers
          </span>
        <span className="flex items-center gap-1">
            <img src={userIcon} alt="User" className=""/>
          {user.following} following
          </span>
      </p>
    </div>
    {!currentRepos.length
    ? <EmptyResult
    icon={notRepoIcons} text="Repository list is empty"
    style={{display: 'flex', height: 'auto', alignItems: 'center', width: '50%'}}
    />
    : <div className="p-14 pl-3 min-w-[1100px] max-w-[1100px]">
      <h2 className="text-5xl md:font-semibold mb-7">Repositories ({user.public_repos})</h2>
      <div className="flex flex-col gap-4">
        {currentRepos.map((repo) => (
        <div key={repo.id} className="text-2xl bg-white py-6 px-8 gap-4 rounded-md">
          <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 mb-6 inline-block"
          >
            {repo.name}
          </a>
          <p>{repo.description}</p>
        </div>
        ))}
      </div>
      <div className="flex items-center justify-end mt-4">
        <div className="flex items-center">
          <span className="mr-2 text-slate-500">{`${startIdx + 1}-${endIdx} of ${public_reports.length} items`}</span>
          <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-50 text-gray-700 rounded disabled:opacity-50"
          >
            &lt;
          </button>
        </div>
        <div className="flex items-center">
          {renderPageNumbers().map((page, index) =>
          typeof page === 'string'
          ? (<span key={index} className="px-4 py-2 mx-1 rounded bg-blue-50 text-gray-700">
              {page}
            </span>)
          : (<button key={index}
                     onClick={() => setCurrentPage(page)}
                     className={`px-4 py-2 mx-1 rounded ${
                     currentPage === page ? 'bg-blue-600 text-white' : 'bg-blue-50 text-gray-700'
                     }`}>
            {page}
          </button>
          ))}
        </div>
        <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-blue-50 text-gray-700 rounded disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>}
  </div>
  );
};

export default UserComponent;
