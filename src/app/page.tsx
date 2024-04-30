import ActiveLabel, { Status } from './components/Labels/status-label';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Hello</h1>
      <ActiveLabel status={Status.Active}>Active</ActiveLabel>
      <ActiveLabel status={Status.NotActive}>Not Active</ActiveLabel>
      <ActiveLabel status={Status.Pending} disabled={true}>
        Panding
      </ActiveLabel>
      <ActiveLabel status={Status.Suspended}>Suspended</ActiveLabel>
    </main>
  );
}
