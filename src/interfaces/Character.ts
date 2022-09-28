export interface Character_I {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: {
    name?: string;
    url?: string;
  };
  location?: {
    name?: string;
    url?: string;
  };
  image?: string;
  episode?: Array<string>;
  url?: string;
  created?: string;
}

export interface CharactersProps {
  characters: Array<Character_I>;
}

export interface CharacterProps {
  character: Character_I
}