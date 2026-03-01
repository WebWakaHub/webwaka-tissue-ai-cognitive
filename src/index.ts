/**
 * AiCognitive — Tissue Layer
 * Composes cells per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: tissue → depends on → cell
 */

import { AiCognitiveCellComposition } from "@webwaka/cell-ai-cognitive-cell";
import { AiInferenceCellComposition } from "@webwaka/cell-ai-inference-cell";
import { AiStreamingCellComposition } from "@webwaka/cell-ai-streaming-cell";

export { AiCognitiveCellComposition } from '@webwaka/cell-ai-cognitive-cell';
export { AiInferenceCellComposition } from '@webwaka/cell-ai-inference-cell';
export { AiStreamingCellComposition } from '@webwaka/cell-ai-streaming-cell';

/**
 * AiCognitive Composition
 * Assembles cell-layer components into a cohesive tissue-layer capability.
 */
export class AiCognitiveComposition {
  private aiCognitiveCellComposition: AiCognitiveCellComposition;
  private aiInferenceCellComposition: AiInferenceCellComposition;
  private aiStreamingCellComposition: AiStreamingCellComposition;

  constructor() {
    this.aiCognitiveCellComposition = new AiCognitiveCellComposition();
    this.aiInferenceCellComposition = new AiInferenceCellComposition();
    this.aiStreamingCellComposition = new AiStreamingCellComposition();
  }
}

export * from "./types";
