interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export default function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <br />
      <a
        href={props.repository.html_url}
        target="_blank"
      >
        Access Repository
      </a>
    </li>
  );
}
