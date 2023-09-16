import 'server-only';
import React from 'react';
import ClientType from '@notionhq/client/build/src/Client';
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
}) as ClientType;

export default notion;
