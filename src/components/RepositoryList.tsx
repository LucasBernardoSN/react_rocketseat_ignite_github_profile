import '../styles/repositories.scss';

import { useEffect, useState } from 'react';

import RepositoryItem from './RepositoryItem';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

const URL_REPOSITORY = 'https://api.github.com/users/LucasBernardoSN/repos';

export default function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch(URL_REPOSITORY)
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>User Repositories</h1>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem
            key={repository.name}
            repository={repository}
          />
        ))}
      </ul>
    </section>
  );
}
