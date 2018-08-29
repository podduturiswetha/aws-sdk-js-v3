import {_UnmarshalledDelegationSet} from './_DelegationSet';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>A complex type that contains the response to the <code>GetReusableDelegationSet</code> request.</p>
 */
export interface GetReusableDelegationSetOutput {
    /**
     * <p>A complex type that contains information about the reusable delegation set.</p>
     */
    DelegationSet: _UnmarshalledDelegationSet;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}