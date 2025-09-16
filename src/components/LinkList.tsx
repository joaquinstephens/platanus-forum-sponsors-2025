interface LinkItem {
  text: string;
  url?: string;
}
interface LinkListProps {
  items: LinkItem[];
}
export function LinkList({
  items
}: LinkListProps) {
  return <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-foreground/90">
          {item.url ? (
            <a href={item.url} className="text-primary hover:underline">
              {item.text}
            </a>
          ) : (
            item.text
          )}
        </li>
      ))}
    </ul>;
}