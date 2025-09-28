import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { PLACEHOLDER_IMAGE } from '../constants';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">ALX Listing App</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          title="Sample Property 1"
          description="This is a sample property description."
          image={PLACEHOLDER_IMAGE}
        />
        <Card
          title="Sample Property 2"
          description="Another property description."
          image={PLACEHOLDER_IMAGE}
        />
        <Card
          title="Sample Property 3"
          description="Yet another sample description."
          image={PLACEHOLDER_IMAGE}
        />
      </div>

      <div className="mt-6">
        <Button label="Book Now" onClick={() => alert('Button clicked!')} />
      </div>
    </div>
  );
}

