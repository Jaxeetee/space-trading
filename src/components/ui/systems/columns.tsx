"use client";

import React from 'react'

import { ColumnDef } from '@tanstack/react-table';
import { Contract } from '@/interface/player';

export const columns: ColumnDef<Contract>[] = [
  {
    accessorKey: "faction",
    header: "Faction"
  },
  {
    accessorKey: "contractType",
    header: "Type"
  },
  {
    accessorKey: "terms",
    header: "Terms"
  },
  {
    accessorKey: "delivery",
    header: "Delivery"
  },
  {
    accessorKey: "expiration",
    header: "Expiration"
  },
  {
    accessorKey: "deadlineToAccept",
    header: "Deadline to Accept"
  }
]
