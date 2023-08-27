// global.d.ts
import React from "react";

declare const If: React.FC<{ condition: boolean }>;
declare const Choose: React.FC;
declare const When: React.FC<{ condition: boolean }>;
declare const Otherwise: React.FC;
