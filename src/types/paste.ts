export interface PasteData {
  content: string;
  createdAt: number;
  expiresAt: number;
}

export interface PostRequestBody {
  content: string;
  expires: number;
}

export interface DeleteRequestBody {
  id: string;
}

