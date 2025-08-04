import { animations } from '@/lib/animations';
import { AnimationCard } from '@/components/animation-card';
import { SearchBar } from '@/components/search-bar';

export default async function AnimationsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    category?: string;
  };
}) {
  const query = searchParams?.query || '';
  const category = searchParams?.category;

  const filteredAnimations = animations.filter((animation) => {
    const matchesCategory = category
      ? animation.category === category
      : true;
    const matchesQuery = animation.title
      .toLowerCase()
      .includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="flex flex-col h-full">
        <header className="p-4 md:p-6 text-center">
             <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                Animation Library
            </h1>
            <p className="mt-2 text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
                A curated collection of production-ready animations.
            </p>
            <div className="mt-6 flex justify-center">
                <SearchBar placeholder="Search for animations..." />
            </div>
        </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-6 pt-0">
        {filteredAnimations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAnimations.map((animation) => (
              <AnimationCard key={animation.id} animation={animation} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <h2 className="text-2xl font-semibold">No Animations Found</h2>
            <p className="text-muted-foreground mt-2">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
