(function() {var implementors = {};
implementors["lockdrop_oracle"] = [{"text":"impl Send for Config","synthetic":true,"types":[]}];
implementors["ovmi"] = [{"text":"impl Send for AccountId","synthetic":true,"types":[]},{"text":"impl Send for Range","synthetic":true,"types":[]},{"text":"impl Send for CompiledPredicate","synthetic":true,"types":[]},{"text":"impl Send for ConstantVariable","synthetic":true,"types":[]},{"text":"impl Send for IntermediateCompiledPredicate","synthetic":true,"types":[]},{"text":"impl Send for AtomicProposition","synthetic":true,"types":[]},{"text":"impl Send for AtomicPredicateCall","synthetic":true,"types":[]},{"text":"impl Send for InputPredicateCall","synthetic":true,"types":[]},{"text":"impl Send for VariablePredicateCall","synthetic":true,"types":[]},{"text":"impl Send for CompiledPredicateCall","synthetic":true,"types":[]},{"text":"impl Send for ConstantInput","synthetic":true,"types":[]},{"text":"impl Send for LabelInput","synthetic":true,"types":[]},{"text":"impl Send for NormalInput","synthetic":true,"types":[]},{"text":"impl Send for VariableInput","synthetic":true,"types":[]},{"text":"impl Send for SelfInput","synthetic":true,"types":[]},{"text":"impl Send for PredicateType","synthetic":true,"types":[]},{"text":"impl Send for VarType","synthetic":true,"types":[]},{"text":"impl Send for AtomicPropositionOrPlaceholder","synthetic":true,"types":[]},{"text":"impl Send for PredicateCall","synthetic":true,"types":[]},{"text":"impl Send for CompiledInput","synthetic":true,"types":[]},{"text":"impl Send for LogicalConnective","synthetic":true,"types":[]},{"text":"impl&lt;P, Ext&gt; Send for AtomicExecutor&lt;P, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P, Ext&gt; Send for BaseAtomicExecutor&lt;P, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P, Ext&gt; Send for LogicalConnectiveExecutor&lt;P, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P, Ext&gt; Send for DecidableExecutor&lt;P, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P, Ext&gt; Send for CompiledExecutor&lt;P, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Send for ExecError&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Send for AndPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Send for CompiledExecutable&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Ext as ExternalCall&gt;::Address: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Ext as ExternalCall&gt;::Hash: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Send for ForAllPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Send for NotPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Send for OrPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Send for ThereExistsPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Send for EqualPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Send for IsContainedPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Send for IsLessThanPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Send for IsStoredPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Send for IsValidSignaturePredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Send for VerifyInclusionPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Send for Property&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Send for AtomicExecutable&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Send for LogicalConnectiveExecutable&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Send for DecidableExecutable&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Send for BaseAtomicExecutable&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Send for PredicateCallInputs&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for AtomicPredicateCallInputs","synthetic":true,"types":[]},{"text":"impl Send for DecidablePredicateCallInputs","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Send for LogicalConnectiveCallInputs&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for BaseAtomicPredicateCallInputs","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Send for CompiledPredicateCallInputs&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for CompiledPredicateSerializable","synthetic":true,"types":[]},{"text":"impl Send for ConstantVariableSerializable","synthetic":true,"types":[]},{"text":"impl Send for IntermediateCompiledPredicateSerializable","synthetic":true,"types":[]},{"text":"impl Send for AtomicPropositionSerializable","synthetic":true,"types":[]},{"text":"impl Send for AtomicPredicateCallSerializable","synthetic":true,"types":[]},{"text":"impl Send for InputPredicateCallSerializable","synthetic":true,"types":[]},{"text":"impl Send for VariablePredicateCallSerializable","synthetic":true,"types":[]},{"text":"impl Send for CompiledPredicateCallSerializable","synthetic":true,"types":[]},{"text":"impl Send for ConstantInputSerializable","synthetic":true,"types":[]},{"text":"impl Send for LabelInputSerializable","synthetic":true,"types":[]},{"text":"impl Send for NormalInputSerializable","synthetic":true,"types":[]},{"text":"impl Send for VariableInputSerializable","synthetic":true,"types":[]},{"text":"impl Send for SelfInputSerializable","synthetic":true,"types":[]},{"text":"impl Send for PredicateTypeSerializable","synthetic":true,"types":[]},{"text":"impl Send for VarTypeSerializable","synthetic":true,"types":[]},{"text":"impl Send for AtomicPropositionOrPlaceholderSerializable","synthetic":true,"types":[]},{"text":"impl Send for PredicateCallSerializable","synthetic":true,"types":[]},{"text":"impl Send for CompiledInputSerializable","synthetic":true,"types":[]},{"text":"impl Send for LogicalConnectiveSerializable","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Send for VarValue&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_contract_operator"] = [{"text":"impl&lt;T&gt; Send for OperatorHasContracts&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ContractHasOperator&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ContractParameters&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Hash: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Parameters: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Parameters&gt; Send for RawEvent&lt;AccountId, Parameters&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Parameters: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for DefaultParameters","synthetic":true,"types":[]}];
implementors["pallet_custom_signatures"] = [{"text":"impl&lt;T&gt; Send for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Send for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Call: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Signature: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for EthereumSignature","synthetic":true,"types":[]}];
implementors["pallet_dapps_staking"] = [{"text":"impl&lt;AccountId, Balance&gt; Send for Nominations&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Send for EraStakingPoints&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Balance&gt; Send for UnlockChunk&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Send for StakingLedger&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for VoteCounts","synthetic":true,"types":[]},{"text":"impl Send for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Send for UntreatedEra","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for NominatorsUntreatedEra&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ContractsUntreatedEra&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ContractVotesUntreatedEra&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Bonded&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Ledger&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Payee&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ErasContractsParameters&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ErasStakingPoints&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ErasTotalStake&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for TotalStakes&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for AccountsVote&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ErasVotes&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Vote","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Send for RawEvent&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Currency: Currency&lt;&lt;T as Trait&gt;::AccountId&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Lookup: StaticLookup,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Lookup as StaticLookup&gt;::Source: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for StakingParameters","synthetic":true,"types":[]},{"text":"impl Send for BasedComputeRewardsForDapps","synthetic":true,"types":[]},{"text":"impl Send for VoidableRewardsForDapps","synthetic":true,"types":[]}];
implementors["pallet_operator_trading"] = [{"text":"impl&lt;AccountId, Balance, Moment&gt; Send for Offer&lt;AccountId, Balance, Moment&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Moment: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Offers&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for OfferState","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::BlockNumber: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Send for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_ovm"] = [{"text":"impl&lt;CodeHash&gt; Send for PredicateContract&lt;CodeHash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CodeHash: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Send for Property&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Hash, BlockNumber&gt; Send for ChallengeGame&lt;Hash, BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Schedule","synthetic":true,"types":[]},{"text":"impl Send for Config","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Hash&gt; Send for AtomicPredicateIdConfig&lt;AccountId, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for SimpleAddressDeterminer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Send for CurrentSchedule","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for PredicateCodes&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for PredicateCache&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Predicates&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Games&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Decision","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Property, Hash, BlockNumber&gt; Send for RawEvent&lt;AccountId, Property, Hash, BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Property: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Hash: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Send for CallContext&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Send for PrefabOvmModule","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for OvmExecutable&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Hash: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !Send for PredicateLoader","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Send for ExecutionContext&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Send for PredicateOvm&lt;T&gt;","synthetic":true,"types":[]}];
implementors["pallet_plasm_lockdrop"] = [{"text":"impl Send for BitcoinPrice","synthetic":true,"types":[]},{"text":"impl Send for EthereumPrice","synthetic":true,"types":[]},{"text":"impl Send for LockCheck","synthetic":true,"types":[]},{"text":"impl Send for BitcoinLock","synthetic":true,"types":[]},{"text":"impl Send for EthereumLock","synthetic":true,"types":[]},{"text":"impl Send for EcdsaSignature","synthetic":true,"types":[]},{"text":"impl Send for DustyDurationBonus","synthetic":true,"types":[]},{"text":"impl&lt;AuthorityId&gt; Send for Claim&lt;AuthorityId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AuthorityId: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for ClaimVote","synthetic":true,"types":[]},{"text":"impl&lt;DollarRate&gt; Send for TickerRate&lt;DollarRate&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AuthorityId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::BlockNumber: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::DollarRate: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Lockdrop","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, AuthorityId, DollarRate, Balance&gt; Send for RawEvent&lt;AccountId, AuthorityId, DollarRate, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;AuthorityId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;DollarRate: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AuthorityId: RuntimeAppPublic + Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::BlockNumber: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::DollarRate: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::AuthorityId as RuntimeAppPublic&gt;::Signature: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_plasm_rewards"] = [{"text":"impl&lt;Moment&gt; Send for ActiveEraInfo&lt;Moment&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Moment: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for GenesisConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ForDappsEraReward&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ForSecurityEraReward&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for HistoryDepth","synthetic":true,"types":[]},{"text":"impl Send for BondedEras","synthetic":true,"types":[]},{"text":"impl Send for CurrentEra","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ActiveEra&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for ErasStartSessionIndex","synthetic":true,"types":[]},{"text":"impl Send for ForceEra","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Releases","synthetic":true,"types":[]},{"text":"impl&lt;Balance&gt; Send for RawEvent&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;N&gt; Send for FirstPlasmIncentive&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;N&gt; Send for CommunityRewards&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for SimpleComputeTotalPayout","synthetic":true,"types":[]},{"text":"impl&lt;Balance&gt; Send for MaintainRatioComputeTotalPayout&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for DefaultForDappsStaking&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_plasm_validator"] = [{"text":"impl&lt;T&gt; Send for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for UntreatedEra","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ElectedValidators&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Validators&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Send for RawEvent&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_plasma"] = [{"text":"impl&lt;T&gt; Send for Deserializer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Balance&gt; Send for Range&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance, BlockNumber&gt; Send for StateUpdate&lt;AccountId, Balance, BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Send for Checkpoint&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, BlockNumber, Balance, Hash&gt; Send for Exit&lt;AccountId, BlockNumber, Balance, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance, Hash&gt; Send for InclusionProof&lt;AccountId, Balance, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Balance, Hash&gt; Send for IntervalInclusionProof&lt;Balance, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance, Hash&gt; Send for AddressInclusionProof&lt;AccountId, Balance, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Balance, Hash&gt; Send for IntervalTreeNode&lt;Balance, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Hash&gt; Send for AddressTreeNode&lt;AccountId, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance, BlockNumber&gt; Send for ExitDeposit&lt;AccountId, Balance, BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for SimpleAddressDeterminer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Hash, BlockNumber, Range, Checkpoint&gt; Send for RawEvent&lt;AccountId, Hash, BlockNumber, Range, Checkpoint&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Checkpoint: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Range: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::BlockNumber: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Currency: Currency&lt;&lt;T as Trait&gt;::AccountId&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Hash: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["plasm_cli"] = [{"text":"impl Send for Cli","synthetic":true,"types":[]},{"text":"impl Send for Subcommand","synthetic":true,"types":[]},{"text":"impl Send for Extensions","synthetic":true,"types":[]}];
implementors["plasm_primitives"] = [{"text":"impl Send for ReporterAppCrypto","synthetic":true,"types":[]}];
implementors["plasm_rpc"] = [{"text":"impl&lt;C, F, P&gt; Send for LightDeps&lt;C, F, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for BabeDeps","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Send for GrandpaDeps&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C, P, SC, B&gt; Send for FullDeps&lt;C, P, SC, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;SC: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["plasm_runtime"] = [{"text":"impl Send for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Send for MaximumBlockWeight","synthetic":true,"types":[]},{"text":"impl Send for MaximumBlockLength","synthetic":true,"types":[]},{"text":"impl Send for AvailableBlockRatio","synthetic":true,"types":[]},{"text":"impl Send for MaximumExtrinsicWeight","synthetic":true,"types":[]},{"text":"impl Send for Version","synthetic":true,"types":[]},{"text":"impl Send for EpochDuration","synthetic":true,"types":[]},{"text":"impl Send for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl Send for IndexDeposit","synthetic":true,"types":[]},{"text":"impl Send for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Send for MaxLocks","synthetic":true,"types":[]},{"text":"impl Send for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Send for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Send for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Send for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Send for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Send for UncleGenerations","synthetic":true,"types":[]},{"text":"impl Send for SessionKeys","synthetic":true,"types":[]},{"text":"impl Send for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Send for MaxScheduledPerBlock","synthetic":true,"types":[]},{"text":"impl Send for SessionsPerEra","synthetic":true,"types":[]},{"text":"impl Send for BondingDuration","synthetic":true,"types":[]},{"text":"impl Send for TombstoneDeposit","synthetic":true,"types":[]},{"text":"impl Send for RentByteFee","synthetic":true,"types":[]},{"text":"impl Send for RentDepositOffset","synthetic":true,"types":[]},{"text":"impl Send for SurchargeReward","synthetic":true,"types":[]},{"text":"impl Send for WindowSize","synthetic":true,"types":[]},{"text":"impl Send for ReportLatency","synthetic":true,"types":[]},{"text":"impl Send for MedianFilterExpire","synthetic":true,"types":[]},{"text":"impl Send for LockdropUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Send for EcdsaUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Send for MaxDepth","synthetic":true,"types":[]},{"text":"impl Send for DisputePeriod","synthetic":true,"types":[]},{"text":"impl Send for GetAtomicPredicateIdConfig","synthetic":true,"types":[]},{"text":"impl Send for MaximumTokenAddress","synthetic":true,"types":[]},{"text":"impl Send for NickReservationFee","synthetic":true,"types":[]},{"text":"impl Send for MinNickLength","synthetic":true,"types":[]},{"text":"impl Send for MaxNickLength","synthetic":true,"types":[]},{"text":"impl Send for FixedGasPrice","synthetic":true,"types":[]},{"text":"impl Send for ChainId","synthetic":true,"types":[]},{"text":"impl Send for TransactionConverter","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for EthereumFindAuthor&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Runtime","synthetic":true,"types":[]},{"text":"impl !Send for Origin","synthetic":true,"types":[]},{"text":"impl Send for PalletInfo","synthetic":true,"types":[]},{"text":"impl Send for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Send for RuntimeApi","synthetic":true,"types":[]},{"text":"impl Send for Event","synthetic":true,"types":[]},{"text":"impl Send for OriginCaller","synthetic":true,"types":[]},{"text":"impl Send for Call","synthetic":true,"types":[]},{"text":"impl Send for HostFunctions","synthetic":true,"types":[]},{"text":"impl Send for HOLDERS","synthetic":true,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, C:&nbsp;CallApiAt&lt;Block&gt;&gt; Send for RuntimeApiImpl&lt;Block, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C::StateBackend: StateBackend&lt;HashFor&lt;Block&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()