```javascript
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyComponent() {
  const router = useRouter();

  useEffect(() => {
    if (router.query.redirect) {
      router.push('/another-page');
    }
  }, [router.query]);

  const handleClick = () => {
    router.push('/another-page?redirect=true');
  };

  return (
    <div>
      <button onClick={handleClick}>Go to Another Page</button>
    </div>
  );
}

export default MyComponent;
```