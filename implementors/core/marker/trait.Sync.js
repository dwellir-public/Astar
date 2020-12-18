(function() {var implementors = {};
implementors["lockdrop_oracle"] = [{"text":"impl Sync for Config","synthetic":true,"types":[]}];
implementors["ovmi"] = [{"text":"impl Sync for AccountId","synthetic":true,"types":[]},{"text":"impl Sync for Range","synthetic":true,"types":[]},{"text":"impl Sync for CompiledPredicate","synthetic":true,"types":[]},{"text":"impl Sync for ConstantVariable","synthetic":true,"types":[]},{"text":"impl Sync for IntermediateCompiledPredicate","synthetic":true,"types":[]},{"text":"impl Sync for AtomicProposition","synthetic":true,"types":[]},{"text":"impl Sync for AtomicPredicateCall","synthetic":true,"types":[]},{"text":"impl Sync for InputPredicateCall","synthetic":true,"types":[]},{"text":"impl Sync for VariablePredicateCall","synthetic":true,"types":[]},{"text":"impl Sync for CompiledPredicateCall","synthetic":true,"types":[]},{"text":"impl Sync for ConstantInput","synthetic":true,"types":[]},{"text":"impl Sync for LabelInput","synthetic":true,"types":[]},{"text":"impl Sync for NormalInput","synthetic":true,"types":[]},{"text":"impl Sync for VariableInput","synthetic":true,"types":[]},{"text":"impl Sync for SelfInput","synthetic":true,"types":[]},{"text":"impl Sync for PredicateType","synthetic":true,"types":[]},{"text":"impl Sync for VarType","synthetic":true,"types":[]},{"text":"impl Sync for AtomicPropositionOrPlaceholder","synthetic":true,"types":[]},{"text":"impl Sync for PredicateCall","synthetic":true,"types":[]},{"text":"impl Sync for CompiledInput","synthetic":true,"types":[]},{"text":"impl Sync for LogicalConnective","synthetic":true,"types":[]},{"text":"impl&lt;P, Ext&gt; Sync for AtomicExecutor&lt;P, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P, Ext&gt; Sync for BaseAtomicExecutor&lt;P, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P, Ext&gt; Sync for LogicalConnectiveExecutor&lt;P, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P, Ext&gt; Sync for DecidableExecutor&lt;P, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P, Ext&gt; Sync for CompiledExecutor&lt;P, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Sync for ExecError&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Sync for AndPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Sync for CompiledExecutable&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Ext as ExternalCall&gt;::Address: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Ext as ExternalCall&gt;::Hash: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Sync for ForAllPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Sync for NotPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Sync for OrPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Sync for ThereExistsPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Sync for EqualPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Sync for IsContainedPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Sync for IsLessThanPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Sync for IsStoredPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Sync for IsValidSignaturePredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Sync for VerifyInclusionPredicate&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Sync for Property&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Sync for AtomicExecutable&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Sync for LogicalConnectiveExecutable&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Sync for DecidableExecutable&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, Ext&gt; Sync for BaseAtomicExecutable&lt;'a, Ext&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ext: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Sync for PredicateCallInputs&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for AtomicPredicateCallInputs","synthetic":true,"types":[]},{"text":"impl Sync for DecidablePredicateCallInputs","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Sync for LogicalConnectiveCallInputs&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for BaseAtomicPredicateCallInputs","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Sync for CompiledPredicateCallInputs&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for CompiledPredicateSerializable","synthetic":true,"types":[]},{"text":"impl Sync for ConstantVariableSerializable","synthetic":true,"types":[]},{"text":"impl Sync for IntermediateCompiledPredicateSerializable","synthetic":true,"types":[]},{"text":"impl Sync for AtomicPropositionSerializable","synthetic":true,"types":[]},{"text":"impl Sync for AtomicPredicateCallSerializable","synthetic":true,"types":[]},{"text":"impl Sync for InputPredicateCallSerializable","synthetic":true,"types":[]},{"text":"impl Sync for VariablePredicateCallSerializable","synthetic":true,"types":[]},{"text":"impl Sync for CompiledPredicateCallSerializable","synthetic":true,"types":[]},{"text":"impl Sync for ConstantInputSerializable","synthetic":true,"types":[]},{"text":"impl Sync for LabelInputSerializable","synthetic":true,"types":[]},{"text":"impl Sync for NormalInputSerializable","synthetic":true,"types":[]},{"text":"impl Sync for VariableInputSerializable","synthetic":true,"types":[]},{"text":"impl Sync for SelfInputSerializable","synthetic":true,"types":[]},{"text":"impl Sync for PredicateTypeSerializable","synthetic":true,"types":[]},{"text":"impl Sync for VarTypeSerializable","synthetic":true,"types":[]},{"text":"impl Sync for AtomicPropositionOrPlaceholderSerializable","synthetic":true,"types":[]},{"text":"impl Sync for PredicateCallSerializable","synthetic":true,"types":[]},{"text":"impl Sync for CompiledInputSerializable","synthetic":true,"types":[]},{"text":"impl Sync for LogicalConnectiveSerializable","synthetic":true,"types":[]},{"text":"impl&lt;Address&gt; Sync for VarValue&lt;Address&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_contract_operator"] = [{"text":"impl&lt;T&gt; Sync for OperatorHasContracts&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ContractHasOperator&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ContractParameters&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Hash: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Parameters: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Parameters&gt; Sync for RawEvent&lt;AccountId, Parameters&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Parameters: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for DefaultParameters","synthetic":true,"types":[]}];
implementors["pallet_custom_signatures"] = [{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Sync for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Call: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Signature: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for EthereumSignature","synthetic":true,"types":[]}];
implementors["pallet_dapps_staking"] = [{"text":"impl&lt;AccountId, Balance&gt; Sync for Nominations&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Sync for EraStakingPoints&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Balance&gt; Sync for UnlockChunk&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Sync for StakingLedger&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for VoteCounts","synthetic":true,"types":[]},{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Sync for UntreatedEra","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for NominatorsUntreatedEra&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ContractsUntreatedEra&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ContractVotesUntreatedEra&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Bonded&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Ledger&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Payee&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ErasContractsParameters&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ErasStakingPoints&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ErasTotalStake&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for TotalStakes&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for AccountsVote&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ErasVotes&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Vote","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Sync for RawEvent&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Currency: Currency&lt;&lt;T as Trait&gt;::AccountId&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Lookup: StaticLookup,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Lookup as StaticLookup&gt;::Source: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for StakingParameters","synthetic":true,"types":[]},{"text":"impl Sync for BasedComputeRewardsForDapps","synthetic":true,"types":[]},{"text":"impl Sync for VoidableRewardsForDapps","synthetic":true,"types":[]}];
implementors["pallet_operator_trading"] = [{"text":"impl&lt;AccountId, Balance, Moment&gt; Sync for Offer&lt;AccountId, Balance, Moment&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Moment: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Offers&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for OfferState","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::BlockNumber: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Sync for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_ovm"] = [{"text":"impl&lt;CodeHash&gt; Sync for PredicateContract&lt;CodeHash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CodeHash: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Sync for Property&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Hash, BlockNumber&gt; Sync for ChallengeGame&lt;Hash, BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Schedule","synthetic":true,"types":[]},{"text":"impl Sync for Config","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Hash&gt; Sync for AtomicPredicateIdConfig&lt;AccountId, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for SimpleAddressDeterminer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Sync for CurrentSchedule","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for PredicateCodes&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for PredicateCache&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Predicates&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Games&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Decision","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Property, Hash, BlockNumber&gt; Sync for RawEvent&lt;AccountId, Property, Hash, BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Property: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Hash: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for CallContext&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Sync for PrefabOvmModule","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for OvmExecutable&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Hash: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !Sync for PredicateLoader","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for ExecutionContext&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Sync for PredicateOvm&lt;T&gt;","synthetic":true,"types":[]}];
implementors["pallet_plasm_lockdrop"] = [{"text":"impl Sync for BitcoinPrice","synthetic":true,"types":[]},{"text":"impl Sync for EthereumPrice","synthetic":true,"types":[]},{"text":"impl Sync for LockCheck","synthetic":true,"types":[]},{"text":"impl Sync for BitcoinLock","synthetic":true,"types":[]},{"text":"impl Sync for EthereumLock","synthetic":true,"types":[]},{"text":"impl Sync for EcdsaSignature","synthetic":true,"types":[]},{"text":"impl Sync for DustyDurationBonus","synthetic":true,"types":[]},{"text":"impl&lt;AuthorityId&gt; Sync for Claim&lt;AuthorityId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AuthorityId: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for ClaimVote","synthetic":true,"types":[]},{"text":"impl&lt;DollarRate&gt; Sync for TickerRate&lt;DollarRate&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AuthorityId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::BlockNumber: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::DollarRate: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Lockdrop","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, AuthorityId, DollarRate, Balance&gt; Sync for RawEvent&lt;AccountId, AuthorityId, DollarRate, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;AuthorityId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;DollarRate: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AuthorityId: RuntimeAppPublic + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::BlockNumber: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::DollarRate: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::AuthorityId as RuntimeAppPublic&gt;::Signature: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_plasm_rewards"] = [{"text":"impl&lt;Moment&gt; Sync for ActiveEraInfo&lt;Moment&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Moment: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ForDappsEraReward&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ForSecurityEraReward&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for HistoryDepth","synthetic":true,"types":[]},{"text":"impl Sync for BondedEras","synthetic":true,"types":[]},{"text":"impl Sync for CurrentEra","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ActiveEra&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for ErasStartSessionIndex","synthetic":true,"types":[]},{"text":"impl Sync for ForceEra","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Releases","synthetic":true,"types":[]},{"text":"impl&lt;Balance&gt; Sync for RawEvent&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;N&gt; Sync for FirstPlasmIncentive&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;N&gt; Sync for CommunityRewards&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for SimpleComputeTotalPayout","synthetic":true,"types":[]},{"text":"impl&lt;Balance&gt; Sync for MaintainRatioComputeTotalPayout&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for DefaultForDappsStaking&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_plasm_validator"] = [{"text":"impl&lt;T&gt; Sync for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for UntreatedEra","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for ElectedValidators&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Validators&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Sync for RawEvent&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_plasma"] = [{"text":"impl&lt;T&gt; Sync for Deserializer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Balance&gt; Sync for Range&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance, BlockNumber&gt; Sync for StateUpdate&lt;AccountId, Balance, BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Sync for Checkpoint&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, BlockNumber, Balance, Hash&gt; Sync for Exit&lt;AccountId, BlockNumber, Balance, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance, Hash&gt; Sync for InclusionProof&lt;AccountId, Balance, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Balance, Hash&gt; Sync for IntervalInclusionProof&lt;Balance, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance, Hash&gt; Sync for AddressInclusionProof&lt;AccountId, Balance, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Balance, Hash&gt; Sync for IntervalTreeNode&lt;Balance, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Hash&gt; Sync for AddressTreeNode&lt;AccountId, Hash&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance, BlockNumber&gt; Sync for ExitDeposit&lt;AccountId, Balance, BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for SimpleAddressDeterminer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Hash, BlockNumber, Range, Checkpoint&gt; Sync for RawEvent&lt;AccountId, Hash, BlockNumber, Range, Checkpoint&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Checkpoint: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Hash: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Range: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::AccountId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Trait&gt;::Currency as Currency&lt;&lt;T as Trait&gt;::AccountId&gt;&gt;::Balance: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::BlockNumber: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Currency: Currency&lt;&lt;T as Trait&gt;::AccountId&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Trait&gt;::Hash: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["plasm_cli"] = [{"text":"impl Sync for Cli","synthetic":true,"types":[]},{"text":"impl Sync for Subcommand","synthetic":true,"types":[]},{"text":"impl Sync for Extensions","synthetic":true,"types":[]}];
implementors["plasm_primitives"] = [{"text":"impl Sync for ReporterAppCrypto","synthetic":true,"types":[]}];
implementors["plasm_rpc"] = [{"text":"impl&lt;C, F, P&gt; Sync for LightDeps&lt;C, F, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for BabeDeps","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Sync for GrandpaDeps&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C, P, SC, B&gt; Sync for FullDeps&lt;C, P, SC, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;SC: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["plasm_runtime"] = [{"text":"impl Sync for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Sync for MaximumBlockWeight","synthetic":true,"types":[]},{"text":"impl Sync for MaximumBlockLength","synthetic":true,"types":[]},{"text":"impl Sync for AvailableBlockRatio","synthetic":true,"types":[]},{"text":"impl Sync for MaximumExtrinsicWeight","synthetic":true,"types":[]},{"text":"impl Sync for Version","synthetic":true,"types":[]},{"text":"impl Sync for EpochDuration","synthetic":true,"types":[]},{"text":"impl Sync for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl Sync for IndexDeposit","synthetic":true,"types":[]},{"text":"impl Sync for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Sync for MaxLocks","synthetic":true,"types":[]},{"text":"impl Sync for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Sync for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Sync for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Sync for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Sync for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Sync for UncleGenerations","synthetic":true,"types":[]},{"text":"impl Sync for SessionKeys","synthetic":true,"types":[]},{"text":"impl Sync for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Sync for MaxScheduledPerBlock","synthetic":true,"types":[]},{"text":"impl Sync for SessionsPerEra","synthetic":true,"types":[]},{"text":"impl Sync for BondingDuration","synthetic":true,"types":[]},{"text":"impl Sync for TombstoneDeposit","synthetic":true,"types":[]},{"text":"impl Sync for RentByteFee","synthetic":true,"types":[]},{"text":"impl Sync for RentDepositOffset","synthetic":true,"types":[]},{"text":"impl Sync for SurchargeReward","synthetic":true,"types":[]},{"text":"impl Sync for WindowSize","synthetic":true,"types":[]},{"text":"impl Sync for ReportLatency","synthetic":true,"types":[]},{"text":"impl Sync for MedianFilterExpire","synthetic":true,"types":[]},{"text":"impl Sync for LockdropUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Sync for EcdsaUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Sync for MaxDepth","synthetic":true,"types":[]},{"text":"impl Sync for DisputePeriod","synthetic":true,"types":[]},{"text":"impl Sync for GetAtomicPredicateIdConfig","synthetic":true,"types":[]},{"text":"impl Sync for MaximumTokenAddress","synthetic":true,"types":[]},{"text":"impl Sync for NickReservationFee","synthetic":true,"types":[]},{"text":"impl Sync for MinNickLength","synthetic":true,"types":[]},{"text":"impl Sync for MaxNickLength","synthetic":true,"types":[]},{"text":"impl Sync for FixedGasPrice","synthetic":true,"types":[]},{"text":"impl Sync for ChainId","synthetic":true,"types":[]},{"text":"impl Sync for TransactionConverter","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Sync for EthereumFindAuthor&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Runtime","synthetic":true,"types":[]},{"text":"impl !Sync for Origin","synthetic":true,"types":[]},{"text":"impl Sync for PalletInfo","synthetic":true,"types":[]},{"text":"impl Sync for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Sync for RuntimeApi","synthetic":true,"types":[]},{"text":"impl Sync for Event","synthetic":true,"types":[]},{"text":"impl Sync for OriginCaller","synthetic":true,"types":[]},{"text":"impl Sync for Call","synthetic":true,"types":[]},{"text":"impl Sync for HostFunctions","synthetic":true,"types":[]},{"text":"impl Sync for HOLDERS","synthetic":true,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, C:&nbsp;CallApiAt&lt;Block&gt;&gt; Sync for RuntimeApiImpl&lt;Block, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C::StateBackend: StateBackend&lt;HashFor&lt;Block&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()