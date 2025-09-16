interface StatCardProps {
  number: string;
  label: string;
  className?: string;
}

export function StatCard({ number, label, className = "" }: StatCardProps) {
  return (
    <div className={`border border-border rounded-xl p-8 text-center bg-card/50 backdrop-blur-sm ${className}`}>
      <div className="text-5xl font-bold text-primary mb-2">
        {number}
      </div>
      <div className="text-sm text-muted-foreground">
        {label}
      </div>
    </div>
  );
}