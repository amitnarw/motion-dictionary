import { animations, Animation, CATEGORIES } from '@/lib/animations';
import { AnimationCard } from '@/components/animation-card';
import { SearchBar } from '@/components/search-bar';

export default async function Home({
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
      <header className="p-4 md:p-6">
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
          Animation Library
        </h1>
        <p className="text-muted-foreground mt-2">
          Explore a curated collection of animations. Click on any card to view and copy the code.
        </p>
        <SearchBar placeholder="Search for animations..." />
      </header>
      <main className="flex-1 overflow-y-auto p-4 md:p-6 pt-0">
        {filteredAnimations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAnimations.map((animation) => (
              <AnimationCard key={animation.id} animation={animation} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
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
