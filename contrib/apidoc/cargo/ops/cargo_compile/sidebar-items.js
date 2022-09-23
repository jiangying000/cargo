window.SIDEBAR_ITEMS = {"enum":[["CompileFilter",""],["FilterRule",""],["LibRule",""],["Packages",""]],"fn":[["build_glob","Build `glob::Pattern` with informative context."],["compile",""],["compile_with_exec","Like `compile` but allows specifying a custom `Executor` that will be able to intercept build calls and add custom logic. `compile` uses `DefaultExecutor` which just passes calls through."],["compile_ws",""],["create_bcx",""],["emit_package_not_found","Emits “package not found” error."],["emit_pattern_not_found","Emits “glob pattern not found” error."],["filter_default_targets","Given a list of all targets for a package, filters out only the targets that are automatically included when the user doesn’t specify any targets."],["filter_targets",""],["find_named_targets","Finds the targets for a specifically named target."],["generate_targets","Generates all the base targets for the packages the user has requested to compile. Dependencies for these targets are computed later in `unit_dependencies`."],["list_rule_targets","Returns a list of proposed targets based on command-line target selection flags."],["match_patterns","Checks whether a package matches any of a list of glob patterns generated from `opt_patterns_and_names`."],["opt_patterns_and_names","Given a list opt-in or opt-out package selection strings, generates two collections that represent glob patterns and package names respectively."],["override_rustc_crate_types","Override crate types for given units."],["print",""],["rebuild_unit_graph_shared","This is used to rebuild the unit graph, sharing host dependencies if possible."],["remove_duplicate_doc","Removes duplicate CompileMode::Doc units that would cause problems with filename collisions."],["resolve_all_features","Gets all of the features enabled for a package, plus its dependencies’ features."],["traverse_and_share","Recursive function for rebuilding the graph."],["unmatched_target_filters","Checks if the unit list is empty and the user has passed any combination of –tests, –examples, –benches or –bins, and we didn’t match on any targets. We want to emit a warning to make sure the user knows that this run is a no-op, and their code remains unchecked despite cargo not returning any errors"],["validate_required_features","Warns if a target’s required-features references a feature that doesn’t exist."]],"struct":[["CompileOptions","Contains information about how a package should be compiled."],["Proposal","A proposed target."]]};