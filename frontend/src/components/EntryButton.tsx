interface EntryButtonProps {
  onClick: () => void;
}

export default function EntryButton({ onClick }: EntryButtonProps) {
  return (
    <button className="enter-btn" onClick={onClick}>
      Open My Heart ❤️
    </button>
  );
}
