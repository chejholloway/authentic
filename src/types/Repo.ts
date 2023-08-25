import Owner from './Repo';

export default interface Repo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner?: Owner;
}
