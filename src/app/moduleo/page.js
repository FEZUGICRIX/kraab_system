import ModuleoClient from './ModuleoClient';

export const metadata = {
  title: 'Moduleo',
  description:
    'MODULEO tarjoaa ylellisiä vinyylilattioita, jotka ovat täydellinen valinta niin kylpyhuoneisiin kuin keittiöihinkin niiden vedenpitävyyden ansiosta. Materiaalin kestävyys varmistaa, että lattiat pysyvät naarmuuntumattomina, sillä ne on suojattu paksulla kulutusta kestävällä kerroksella. Asennus on monipuolista ja kätevää, sillä lattiat voidaan asentaa joko liimalla tai helposti napsauttamalla paikalleen.',
};

const Moduleo = () => {
  return <ModuleoClient />;
};

export default Moduleo;
