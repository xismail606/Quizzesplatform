/* ===================================
   MULTIPLE CHOICE QUESTIONS (MCQ)
   Total: 65 Questions
=================================== */
const MCQ_DATA = [
  { 
    id: 1, 
    type: 'mcq', 
    question: "In HDFS, which single component must be running and reachable for clients to perform metadata operations (create/delete/rename), even if data nodes are temporarily down?", 
    options: ["A) DataNode", "B) NameNode", "C) SecondaryNameNode", "D) JournalNode"], 
    answer: "B" 
  },
  { 
    id: 2, 
    type: 'mcq', 
    question: "Parquet stores nested structures using which technique that complicates row reconstruction but improves columnar compression?", 
    options: ["A) Row poisoning", "B) Hybrid shredding (repetition + definition levels)", "C) Tuple flattening", "D) Inline JSON blobs"], 
    answer: "B" 
  },
  { 
    id: 3, 
    type: 'mcq', 
    question: "A Kafka producer configured with acks=all and idempotent producers enabled primarily ensures:", 
    options: ["A) Zero duplicates, no matter what", "B) At-least-once without duplicates only if transactions also used", "C) Leader commit to all in-sync replicas before ack, reducing but not eliminating duplicates by itself", "D) Exactly-once end-to-end automatically"], 
    answer: "C" 
  },
  { 
    id: 4, 
    type: 'mcq', 
    question: "Which Spark optimization can legally change semantics for floating-point summations to improve speed?", 
    options: ["A) Whole-stage codegen", "B) Catalyst logical rewrite", "C) Associative reordering via SQLConf enabling approximate/combinable reductions (e.g., treeAggregate optimizations)", "D) Tungsten off-heap allocation"], 
    answer: "C" 
  },
  { 
    id: 5, 
    type: 'mcq', 
    question: "When using MapReduce to aggregate click counts, adding a combiner may change results when:", 
    options: ["A) The reduce function is associative and commutative", "B) The reduce function is non-associative (e.g., depends on ordering)", "C) Mapper emits single key per map only", "D) There is no shuffle"], 
    answer: "B" 
  },
  { 
    id: 6, 
    type: 'mcq', 
    question: "In a columnar store, query performance degrades most when:", 
    options: ["A) You read a small number of columns for billions of rows", "B) You request almost every column for a small set of rows (point access across many columns)", "C) You perform columnar compression", "D) You use vectorized reads"], 
    answer: "B" 
  },
  { 
    id: 7, 
    type: 'mcq', 
    question: "A dataset with strong temporal locality is best accelerated by:", 
    options: ["A) Increasing HDFS block size only", "B) Partitioning by an unrelated key", "C) Partitioning by timestamp and clustering within partitions for local sequential reads", "D) Storing everything in many tiny files for parallelism"], 
    answer: "C" 
  },
  { 
    id: 8, 
    type: 'mcq', 
    question: "For exact distributed quantile computation without gathering all data centrally, you would use:", 
    options: ["A) Local reservoir sampling and merge by averaging", "B) Mergeable deterministic summaries like GK with careful error accounting", "C) Sketches (HyperLogLog) directly for quantiles", "D) Global sort across workers only"], 
    answer: "B" 
  },
  { 
    id: 9, 
    type: 'mcq', 
    question: "In Spark, collect() is dangerous because:", 
    options: ["A) It launches extra executors", "B) It brings the entire distributed dataset to the driver (OOM risk)", "C) It changes partitions automatically", "D) It invalidates caches"], 
    answer: "B" 
  },
  { 
    id: 10, 
    type: 'mcq', 
    question: "Which join under heavy key skew is least likely to fail but may be extremely slow?", 
    options: ["A) Broadcast join with small table", "B) Shuffle sort-merge join with skewed partitions", "C) Map-side hash join", "D) Cartesian join"], 
    answer: "B" 
  },
  { 
    id: 11, 
    type: 'mcq', 
    question: "Avro schema evolution issues commonly arise when:", 
    options: ["A) You change the file encoding to UTF-16 only", "B) You remove a field with no default and consumers still expect it", "C) You add a field with a default value", "D) You compress the Avro file with snappy"], 
    answer: "B" 
  },
  { 
    id: 12, 
    type: 'mcq', 
    question: "Which property is NOT implied by choosing an LSM-tree based store (like HBase/Cassandra)?", 
    options: ["A) Fast sequential writes", "B) Compaction overhead during reads/writes", "C) In-place overwrites without compaction", "D) Multiple on-disk sorted runs (SSTables)"], 
    answer: "C" 
  },
  { 
    id: 13, 
    type: 'mcq', 
    question: "Watermarking in stream processing is used to:", 
    options: ["A) Encrypt late events", "B) Bound state retention and reason about lateness in event-time windows", "C) Prevent duplicates in Kafka sinks", "D) Schedule checkpoints"], 
    answer: "B" 
  },
  { 
    id: 14, 
    type: 'mcq', 
    question: "To provably obtain globally consistent exactly-once results for a stream-to-db sink, you should implement:", 
    options: ["A) Idempotent writes only", "B) Two-phase commit / transactional sinks coordinated with source offsets", "C) At-least-once delivery and ignore duplicates downstream", "D) Local file writes from each task only"], 
    answer: "B" 
  },
  { 
    id: 15, 
    type: 'mcq', 
    question: "In Spark SQL, predicate pushdown to Parquet is prevented when:", 
    options: ["A) The predicate uses only column comparison operations", "B) The predicate contains a non-deterministic UDF or unsupported expression requiring full row materialization", "C) The column is present in the file footer", "D) The file is compressed with snappy"], 
    answer: "B" 
  },
  { 
    id: 16, 
    type: 'mcq', 
    question: "HyperLogLog is best for estimating:", 
    options: ["A) Frequent item counts exactly", "B) Set cardinality (distinct count) approximately with small memory", "C) Point membership without false positives", "D) Exact top-k items"], 
    answer: "B" 
  },
  { 
    id: 17, 
    type: 'mcq', 
    question: "If a Kafka consumer lags and restarts but has committed offsets using enable.auto.commit=true, you risk:", 
    options: ["A) Always reprocessing the same messages exactly once", "B) Reprocessing or skipping messages depending on commit timing", "C) Guaranteed no replays ever", "D) Leader election failures only"], 
    answer: "B" 
  },
  { 
    id: 18, 
    type: 'mcq', 
    question: "Partition pruning will NOT help when:", 
    options: ["A) The query predicate is on the partition column", "B) The partition column is hidden behind a non-deterministic function in the WHERE clause", "C) The planner recognizes static partition values", "D) The table is partitioned by date and WHERE uses date literals"], 
    answer: "B" 
  },
  { 
    id: 19, 
    type: 'mcq', 
    question: "The Count-Min Sketch produces errors that are:", 
    options: ["A) Uniformly distributed both positive and negative", "B) One-sided (only overestimates) with probability bounded by parameters", "C) Always zero for items seen once", "D) Exact for large counts only"], 
    answer: "B" 
  },
  { 
    id: 20, 
    type: 'mcq', 
    question: "To make a large-scale join reproducible and deterministic across runs with floating-point keys, you must:", 
    options: ["A) Rely on default binary equality of floats", "B) Normalize keys (e.g., quantize/round) deterministically before partitioning and joining", "C) Use random partitioners each run", "D) Use map-side only joins always"], 
    answer: "B" 
  },
  { 
    id: 21, 
    type: 'mcq', 
    question: "A small-files problem in HDFS primarily causes:", 
    options: ["A) Too much replication", "B) NameNode memory pressure due to many metadata entries", "C) Faster garbage collection on DataNodes", "D) Automatic compression of files"], 
    answer: "B" 
  },
  { 
    id: 22, 
    type: 'mcq', 
    question: "Reservoir sampling over multiple partitions merged centrally must be done carefully because:", 
    options: ["A) Simple concatenation yields uniform global sample", "B) You must weight/per-partition-reservoirs by partition sizes when merging to keep unbiasedness", "C) Each reservoir is independent and always identical sizes guarantee unbiasedness", "D) Only sampling without replacement works across partitions"], 
    answer: "B" 
  },
  { 
    id: 23, 
    type: 'mcq', 
    question: "In a Delta Lake or similar ACID-on-data-lake system, VACUUM typically:", 
    options: ["A) Deletes active snapshots needed for time travel immediately", "B) Removes old files not referenced by the latest metadata, reclaiming storage", "C) Rewrites file schemas automatically", "D) Compacts small files into one huge file regardless of transaction state"], 
    answer: "B" 
  },
  { 
    id: 24, 
    type: 'mcq', 
    question: "Local checkpointing (on the task machine) in stream processing is risky because:", 
    options: ["A) It's always slower than central checkpointing", "B) Local state can be lost when the node fails unless it's replicated or externalized", "C) It uses too much disk space on the driver", "D) It prevents recovery entirely"], 
    answer: "B" 
  },
  { 
    id: 25, 
    type: 'mcq', 
    question: "Spark broadcast variables are useful when:", 
    options: ["A) You broadcast terabytes of reference data to all executors always", "B) You share a small read-only lookup dataset efficiently across tasks on executors", "C) You broadcast driver heap to executors", "D) You send shuffle data without network I/O"], 
    answer: "B" 
  },
  { 
    id: 26, 
    type: 'mcq', 
    question: "Key-salting solves reducer hot-spotting by:", 
    options: ["A) Encrypting the key so partitions can't be predicted", "B) Prefixing keys with salt values to spread load, requiring re-aggregation to remove salt", "C) Reducing the number of partitions to one large reducer", "D) Sorting the keys differently only at the reducer"], 
    answer: "B" 
  },
  { 
    id: 27, 
    type: 'mcq', 
    question: "The theoretical lower bound for communication complexity of distributed exact quantile requires:", 
    options: ["A) Constant communication regardless of data size", "B) Communication proportional to data seen unless using mergeable summaries", "C) Zero communication with perfect accuracy", "D) Only one round of communication always suffices"], 
    answer: "B" 
  },
  { 
    id: 28, 
    type: 'mcq', 
    question: "In HBase, region servers host:", 
    options: ["A) Entire HDFS namespaces", "B) Subsets of the table (regions) responsible for ranges of rowkeys", "C) The NameNode functionality", "D) Kafka brokers only"], 
    answer: "B" 
  },
  { 
    id: 29, 
    type: 'mcq', 
    question: "When using Spark structured streaming in continuous processing mode, you trade:", 
    options: ["A) Throughput for deterministic batch semantics only", "B) Lower latency for restrictions in supported operations and less deterministic failure semantics", "C) Exactly-once for at-least-once always", "D) No trade-offs at all"], 
    answer: "B" 
  },
  { 
    id: 30, 
    type: 'mcq', 
    question: "Schema-on-read differs from schema-on-write by:", 
    options: ["A) Forcing schema at ingestion time always", "B) Applying schema when reading/processing, offering flexibility at cost of late errors", "C) Preventing any schema evolution", "D) Only valid for OLTP systems"], 
    answer: "B" 
  },
  { 
    id: 31, 
    type: 'mcq', 
    question: "A Bloom filter used as a pre-check for key existence avoids disk seek but can cause:", 
    options: ["A) False negatives that miss real keys", "B) False positives that cause unnecessary disk lookups but never miss a real key", "C) Exact identification of record offsets always", "D) Deterministic compression gains only"], 
    answer: "B" 
  },
  { 
    id: 32, 
    type: 'mcq', 
    question: "Which is a typical sign of skew in a distributed job?", 
    options: ["A) Perfectly equal task durations", "B) Some tasks (reducers) take much longer while others finish quickly", "C) No shuffle at all", "D) Data uniformly distributed by hash"], 
    answer: "B" 
  },
  { 
    id: 33, 
    type: 'mcq', 
    question: "To reduce cross-region network egress cost for analytics, best practice is:", 
    options: ["A) Run heavy compute in the region where most data resides and ship results only", "B) Always centralize all raw data into a single region before compute", "C) Use smaller block sizes in HDFS only", "D) Use more replication across regions unconditionally"], 
    answer: "A" 
  },
  { 
    id: 34, 
    type: 'mcq', 
    question: "Which distributed aggregation scheme is provably mergeable and numerically stable for sums and variances?", 
    options: ["A) Naive pairwise sum across workers in arbitrary order", "B) Kahan or pairwise-reduction style compensated summation applied to mergeable partial aggregates", "C) Summing with float32 only centrally", "D) Relying on driver double precision only"], 
    answer: "B" 
  },
  { 
    id: 35, 
    type: 'mcq', 
    question: "Kafka log compaction is intended to:", 
    options: ["A) Keep only the latest message per key (useful for changelog topics)", "B) Remove messages older than a TTL only", "C) Compress messages lossily by content similarity", "D) Merge partitions across topics"], 
    answer: "A" 
  },
  { 
    id: 36, 
    type: 'mcq', 
    question: "Using spark.sql.shuffle.partitions too low for a large dataset leads to:", 
    options: ["A) Improved parallelism always", "B) Very large partitions with heavy GC and possible OOM in tasks", "C) No effect at runtime", "D) More partitions created automatically by Spark"], 
    answer: "B" 
  },
  { 
    id: 37, 
    type: 'mcq', 
    question: "A map-side join requires:", 
    options: ["A) Both datasets to be huge equally", "B) One dataset small enough (or pre-partitioned) to be available locally on mappers", "C) No reducers configured at all in Hadoop", "D) A reduce-phase after map for joining"], 
    answer: "B" 
  },
  { 
    id: 38, 
    type: 'mcq', 
    question: "The best approach to compute top-k per key at scale with memory constraints is:", 
    options: ["A) Keep full lists per key and sort at the end centrally", "B) Maintain fixed-size heaps per key and merge partial top-k from partitions", "C) Use full-group aggregation without combiner", "D) Use Cartesian product to compare all items"], 
    answer: "B" 
  },
  { 
    id: 39, 
    type: 'mcq', 
    question: "ORC file format is most associated historically with:", 
    options: ["A) Spark only", "B) Hive and the Hadoop ecosystem with strong predicate pushdown", "C) Kafka topics", "D) Relational OLTP databases only"], 
    answer: "B" 
  },
  { 
    id: 40, 
    type: 'mcq', 
    question: "To prevent data loss with exactly-once semantics in Kafka Streams, you must ensure:", 
    options: ["A) Producers are idempotent, transactions used, and sinks support transactional commits", "B) Only autocommit offsets are used", "C) Consumers commit offsets before processing records always", "D) No brokers ever fail"], 
    answer: "A" 
  },
  { 
    id: 41, 
    type: 'mcq', 
    question: "A Count-Min Sketch error depends on:", 
    options: ["A) Only the alphabet size", "B) Width and depth parameters (hash table dimensions) chosen at sketch creation", "C) The type of compression used on the sketch file", "D) The number of distinct queries run against it"], 
    answer: "B" 
  },
  { 
    id: 42, 
    type: 'mcq', 
    question: "For extremely high-cardinality categorical features in ML, the hashing-trick disadvantages include:", 
    options: ["A) No memory savings", "B) Hash collisions that mix categories which may harm some models", "C) Perfect invertibility of hashed features always available", "D) Deterministic mapping to one-hot vectors without collisions"], 
    answer: "B" 
  },
  { 
    id: 43, 
    type: 'mcq', 
    question: "Checkpointing streaming state regularly is crucial mainly because:", 
    options: ["A) It reduces throughput always", "B) It allows recovery from failures without recomputing entire state from scratch", "C) It stops late data from arriving", "D) It removes the need for watermarks completely"], 
    answer: "B" 
  },
  { 
    id: 44, 
    type: 'mcq', 
    question: "Merge-on-read storage (vs copy-on-write) in lakehouse systems trades:", 
    options: ["A) Simplicity for immediate compaction only", "B) Query complexity and latency for faster writes and smaller immediate write amplification", "C) Always lower read latency and simpler snapshotting", "D) No difference at all"], 
    answer: "B" 
  },
  { 
    id: 45, 
    type: 'mcq', 
    question: "Impala differs from Hive-on-Tez by being optimized for:", 
    options: ["A) Deep-learning model inference only", "B) Low-latency interactive SQL queries with its own execution engine", "C) Transactional OLTP workloads only", "D) Only streaming ingestion of events"], 
    answer: "B" 
  },
  { 
    id: 46, 
    type: 'mcq', 
    question: "When tuning GC for Spark executors, you must consider:", 
    options: ["A) Only driver memory size", "B) Executor heap, off-heap memory, number of cores, and workload shuffle patterns", "C) Number of Kafka partitions only", "D) The SQL dialect used in queries"], 
    answer: "B" 
  },
  { 
    id: 47, 
    type: 'mcq', 
    question: "A stateful stream operator with unbounded state requires:", 
    options: ["A) No checkpointing ever", "B) Mechanisms to bound state (TTLs, windowing, compaction) or risk unbounded memory growth", "C) Fewer partitions always", "D) Exactly-once disabled"], 
    answer: "B" 
  },
  { 
    id: 48, 
    type: 'mcq', 
    question: "In a multi-tenant cluster, noisy neighbor problems are best addressed by:", 
    options: ["A) Letting everyone use maximum resources always", "B) Resource isolation, fair schedulers, and workload shaping policies", "C) Using a single global scheduler only", "D) Using tiny files per task only"], 
    answer: "B" 
  },
  { 
    id: 49, 
    type: 'mcq', 
    question: "Spark's cache() VS persist(StorageLevel.MEMORY_ONLY) differ mainly by:", 
    options: ["A) cache() is shorthand for persist() with default MEMORY_ONLY, identical semantics", "B) cache() always writes to disk regardless", "C) persist() clears all caches globally", "D) They change partitioning automatically"], 
    answer: "A" 
  },
  { 
    id: 50, 
    type: 'mcq', 
    question: "The difference between eventual consistency and causal consistency is:", 
    options: ["A) Causal ensures related ops are seen in order, while eventual only guarantees eventual convergence", "B) They are identical in all distributed stores", "C) Eventual consistency enforces strict linearizability", "D) Causal consistency requires synchronous replication always"], 
    answer: "A" 
  },
  { 
    id: 51, 
    type: 'mcq', 
    question: "Which Spark operation triggers a shuffle?", 
    options: ["A) map() only", "B) groupByKey(), reduceByKey(), join() operations", "C) filter() always", "D) cache() always"], 
    answer: "B" 
  },
  { 
    id: 52, 
    type: 'mcq', 
    question: "To reduce false positives in a Bloom filter you can:", 
    options: ["A) Increase the number of hash functions infinitely", "B) Tune bit array size and number of hash functions; larger bit arrays reduce false positives", "C) Use one hash only always", "D) Use HyperLogLog instead"], 
    answer: "B" 
  },
  { 
    id: 53, 
    type: 'mcq', 
    question: "Spark repartition(n) VS coalesce(n) difference:", 
    options: ["A) repartition always avoids shuffle", "B) repartition reshuffles data (full shuffle), coalesce can avoid it when decreasing", "C) Both always replicate data", "D) Neither changes partition count"], 
    answer: "B" 
  },
  { 
    id: 54, 
    type: 'mcq', 
    question: "Using approximate algorithms for top-k, quantiles, or heavy hitters is acceptable when:", 
    options: ["A) Absolute exactness is required", "B) Small bounded errors are tolerable in exchange for massive memory/compute savings", "C) You want to break reproducibility", "D) You have unlimited memory"], 
    answer: "B" 
  },
  { 
    id: 55, 
    type: 'mcq', 
    question: "In Cassandra, data model design must often be query-driven because:", 
    options: ["A) It supports arbitrary joins efficiently", "B) Denormalization and query-specific table design avoid expensive server-side joins", "C) It requires ACID joins across partitions", "D) It uses columnar compression only"], 
    answer: "B" 
  },
  { 
    id: 56, 
    type: 'mcq', 
    question: "Elastic scaling of a stateful stream job across more workers requires:", 
    options: ["A) Often requires state migration and coordinated checkpointing to ensure correctness", "B) Only adding more CPU cores on the driver", "C) Removing checkpoints altogether", "D) Changing Kafka partition count always"], 
    answer: "A" 
  },
  { 
    id: 57, 
    type: 'mcq', 
    question: "Columnar formats are poor choices for frequently updated transactional workloads because:", 
    options: ["A) They compress too well", "B) They require rewriting large column chunks for small updates (no row-level in-place update)", "C) They are unreadable by SQL engines", "D) They don't support predicate pushdown"], 
    answer: "B" 
  },
  { 
    id: 58, 
    type: 'mcq', 
    question: "A deterministic merge of partial aggregates for distinct count requires:", 
    options: ["A) Simply summing partial counts", "B) Use of mergeable set sketches (e.g., HyperLogLog union operations)", "C) Counting only in the driver", "D) Sorting globally by value"], 
    answer: "B" 
  },
  { 
    id: 59, 
    type: 'mcq', 
    question: "Checkpointing + external durable storage is used to:", 
    options: ["A) Avoid any need to replay any data", "B) Persist stream processing progress so tasks can restart from a consistent point", "C) Increase event-time lateness", "D) Eliminate the need for watermarks"], 
    answer: "B" 
  },
  { 
    id: 60, 
    type: 'mcq', 
    question: "An eventual-convergent CRDT for counters supports concurrent increments and decrements by:", 
    options: ["A) Requiring global locking", "B) Designing mergeable state that deterministically converges without coordination", "C) Rejecting concurrent operations", "D) Using central coordinator"], 
    answer: "B" 
  },
  { 
    id: 61, 
    type: 'mcq', 
    question: "For streaming joins with out-of-order events, you need:", 
    options: ["A) Only window size", "B) Windowing + watermarking + state retention configuration", "C) No state at all", "D) Exactly-once turned off"], 
    answer: "B" 
  },
  { 
    id: 62, 
    type: 'mcq', 
    question: "To debug a non-deterministic distributed job that sometimes fails only at scale, you should:", 
    options: ["A) Assume code is fine", "B) Reproduce with realistic data distributions and use randomized-seed control", "C) Remove all logging", "D) Only test on the driver"], 
    answer: "B" 
  },
  { 
    id: 63, 
    type: 'mcq', 
    question: "Data lineage matters for:", 
    options: ["A) Only backups", "B) Auditability, reproducibility, and debugging of analytical results", "C) Replacing all schemas", "D) Reducing storage cost"], 
    answer: "B" 
  },
  { 
    id: 64, 
    type: 'mcq', 
    question: "If you need sub-second OLAP queries over event streams with rollup capabilities, architecture includes:", 
    options: ["A) Batch-nightly jobs only", "B) Real-time ingestion + stream processor + low-latency analytical store (e.g., Druid)", "C) Scanning HDFS for every query", "D) Only relational OLTP DBs"], 
    answer: "B" 
  },
  { 
    id: 65, 
    type: 'mcq', 
    question: "For distributed training with unreliable network, reduce communication by:", 
    options: ["A) Synchronous SGD every iteration", "B) Gradient compression, local accumulation, and occasional synchronization (federated averaging)", "C) Sharing full-precision gradients every micro-batch", "D) Single-threaded CPU training"], 
    answer: "B" 
  }
];

/* ===================================
   TRUE/FALSE QUESTIONS
   Total: 59 Questions
=================================== */
const TF_DATA = [
  { id: 66, type: 'tf', question: "Spark DataFrames are distributed collections of Row objects that provide a schema and can be optimized by Catalyst.", options: ["A) True", "B) False"], answer: "A" },
  { id: 67, type: 'tf', question: "MapReduce's shuffle phase occurs between the map and reduce stages and is typically the most network-intensive part.", options: ["A) True", "B) False"], answer: "A" },
  { id: 68, type: 'tf', question: "Parquet files store data row-by-row, making them ideal for OLTP workloads.", options: ["A) True", "B) False"], answer: "B" },
  { id: 69, type: 'tf', question: "A Bloom filter can definitively tell you that an element is NOT present (no false negatives).", options: ["A) True", "B) False"], answer: "A" },
  { id: 70, type: 'tf', question: "Increasing HDFS block size can reduce NameNode metadata overhead for the same total data volume.", options: ["A) True", "B) False"], answer: "A" },
  { id: 71, type: 'tf', question: "Kafka guarantees end-to-end exactly-once delivery automatically for all use cases without additional configuration.", options: ["A) True", "B) False"], answer: "B" },
  { id: 72, type: 'tf', question: "In Cassandra, writes are optimized to be extremely fast because they are append-only and use an LSM-tree design.", options: ["A) True", "B) False"], answer: "A" },
  { id: 73, type: 'tf', question: "In Spark Structured Streaming, the same code that expresses a streaming query can often be used for batch queries (micro-batch unification).", options: ["A) True", "B) False"], answer: "A" },
  { id: 74, type: 'tf', question: "A dataset with very many tiny files can hurt Hadoop/Spark performance and lead to NameNode memory pressure.", options: ["A) True", "B) False"], answer: "A" },
  { id: 75, type: 'tf', question: "Vectorized execution processes values in columnar batches to reduce CPU overhead and improve CPU cache locality.", options: ["A) True", "B) False"], answer: "A" },
  { id: 76, type: 'tf', question: "Predicate pushdown can reduce IO by applying filters at the file-read level.", options: ["A) True", "B) False"], answer: "A" },
  { id: 77, type: 'tf', question: "In a Kafka topic with 10 partitions, a single consumer in a consumer group can read from all 10 partitions simultaneously.", options: ["A) True", "B) False"], answer: "A" },
  { id: 78, type: 'tf', question: "The Count-Min Sketch underestimates frequencies but never overestimates.", options: ["A) True", "B) False"], answer: "B" },
  { id: 79, type: 'tf', question: "Data lakes usually store raw and varied data formats; data warehouses store curated, schema-on-write data.", options: ["A) True", "B) False"], answer: "A" },
  { id: 80, type: 'tf', question: "Apache Flink is designed for stateful stream processing with event-time semantics and strong exactly-once guarantees.", options: ["A) True", "B) False"], answer: "A" },
  { id: 81, type: 'tf', question: "In Spark, broadcasting a very large dataset to all executors is good practice regardless of its size.", options: ["A) True", "B) False"], answer: "B" },
  { id: 82, type: 'tf', question: "Locality Sensitive Hashing (LSH) helps approximate nearest neighbor search in high-dimensional datasets.", options: ["A) True", "B) False"], answer: "A" },
  { id: 83, type: 'tf', question: "HBase supports random real-time read/write access to big tables and is not optimized for complex joins.", options: ["A) True", "B) False"], answer: "A" },
  { id: 84, type: 'tf', question: "A partitioned table with millions of partitions (e.g., one partition per second) is typically a good design.", options: ["A) True", "B) False"], answer: "B" },
  { id: 85, type: 'tf', question: "Schema-on-read allows queries to interpret data formats flexibly at query time but can shift logic/validation cost to query time.", options: ["A) True", "B) False"], answer: "A" },
  { id: 86, type: 'tf', question: "The Greenwald-Khanna (GK) algorithm is designed to compute approximate quantiles with deterministic error bounds.", options: ["A) True", "B) False"], answer: "A" },
  { id: 87, type: 'tf', question: "HyperLogLog provides exact distinct counts for cardinality estimation.", options: ["A) True", "B) False"], answer: "B" },
  { id: 88, type: 'tf', question: "Using partition pruning, query planners can avoid scanning irrelevant partitions, improving performance.", options: ["A) True", "B) False"], answer: "A" },
  { id: 89, type: 'tf', question: "Model parallelism splits model parameters across workers, while data parallelism replicates model and splits data.", options: ["A) True", "B) False"], answer: "A" },
  { id: 90, type: 'tf', question: "Using compression for columnar formats usually increases CPU usage but reduces IO and storage.", options: ["A) True", "B) False"], answer: "A" },
  { id: 100, type: 'tf', question: "A DataNode stores block replicas and serves read/write requests for HDFS blocks.", options: ["A) True", "B) False"], answer: "A" },
  { id: 101, type: 'tf', question: "Enabling Spark speculative execution guarantees no duplicate results in all failure modes.", options: ["A) True", "B) False"], answer: "B" },
  { id: 102, type: 'tf', question: "Parquet's column-chunk and page layout allows reading only required columns, reducing IO.", options: ["A) True", "B) False"], answer: "A" },
  { id: 103, type: 'tf', question: "Using more hash functions in a Bloom filter always reduces the false positive rate no matter the array size.", options: ["A) True", "B) False"], answer: "B" },
  { id: 104, type: 'tf', question: "In Kafka, messages within a partition are strictly ordered by offset.", options: ["A) True", "B) False"], answer: "A" },
  { id: 105, type: 'tf', question: "If two sketches are mergeable, you can arbitrarily merge their summaries and still guarantee the same error bounds.", options: ["A) True", "B) False"], answer: "B" },
  { id: 106, type: 'tf', question: "Spark's persist (MEMORY_AND_DISK) will spill partitions to disk when they don't fit in memory.", options: ["A) True", "B) False"], answer: "A" },
  { id: 107, type: 'tf', question: "A distributed job that shuffles less will always run faster than one that shuffles more.", options: ["A) True", "B) False"], answer: "B" },
  { id: 108, type: 'tf', question: "A broadcast join is efficient when the broadcast side fits comfortably into executor memory.", options: ["A) True", "B) False"], answer: "A" },
  { id: 109, type: 'tf', question: "Exactly-once semantics in streaming make all system-wide failures irrelevant without additional coordination.", options: ["A) True", "B) False"], answer: "B" },
  { id: 110, type: 'tf', question: "Schema registry helps manage Avro/Protobuf schemas and enables consumers to safely evolve schemas.", options: ["A) True", "B) False"], answer: "A" },
  { id: 111, type: 'tf', question: "Hash partitioning always yields balanced partitions regardless of key distribution.", options: ["A) True", "B) False"], answer: "B" },
  { id: 112, type: 'tf', question: "Vectorized readers improve CPU efficiency by operating on batches instead of single rows.", options: ["A) True", "B) False"], answer: "A" },
  { id: 113, type: 'tf', question: "Using larger row-groups in Parquet always improves query performance.", options: ["A) True", "B) False"], answer: "B" },
  { id: 114, type: 'tf', question: "Change Data Capture (CDC) combined with stream processing can enable near-real-time ETL/upsert semantics.", options: ["A) True", "B) False"], answer: "A" },
  { id: 115, type: 'tf', question: "Reducing the number of partitions always improves Spark job performance by reducing task startup overhead.", options: ["A) True", "B) False"], answer: "B" },
  { id: 116, type: 'tf', question: "LSM-trees provide good write throughput but can increase read amplification without compaction.", options: ["A) True", "B) False"], answer: "A" },
  { id: 117, type: 'tf', question: "For all distributed ML algorithms, asynchronous updates converge faster than synchronous updates.", options: ["A) True", "B) False"], answer: "B" },
  { id: 118, type: 'tf', question: "Partitioning data by user_id is a reasonable choice if most queries are per-user lookups.", options: ["A) True", "B) False"], answer: "A" },
  { id: 119, type: 'tf', question: "A skyline of analytical engines is always better than choosing a single best-of-breed engine.", options: ["A) True", "B) False"], answer: "B" },
  { id: 120, type: 'tf', question: "Using reduceByKey() instead of groupByKey() in Spark reduces data shuffled by performing local combiners.", options: ["A) True", "B) False"], answer: "A" },
  { id: 121, type: 'tf', question: "To get deterministic results for floating-point aggregates, you must enforce deterministic reduction order or use stable algorithms.", options: ["A) True", "B) False"], answer: "A" },
  { id: 122, type: 'tf', question: "File format choice (Parquet vs ORC) rarely affects predicate pushdown capabilities.", options: ["A) True", "B) False"], answer: "B" },
  { id: 123, type: 'tf', question: "Merely adding more reducers will always eliminate skew-related slowdowns.", options: ["A) True", "B) False"], answer: "B" },
  { id: 124, type: 'tf', question: "Using a schema registry does not prevent incompatible schema changes unless compatibility settings are enforced.", options: ["A) True", "B) False"], answer: "A" },
  { id: 125, type: 'tf', question: "Stateful stream processing requires exactly the same operator semantics whether runtime uses snapshot+replay or write-ahead logs.", options: ["A) True", "B) False"], answer: "B" },
  { id: 126, type: 'tf', question: "Compaction in systems like Hudi/Delta reduces the number of files and may improve read latency.", options: ["A) True", "B) False"], answer: "A" },
  { id: 127, type: 'tf', question: "Using approximate nearest neighbor (ANN) indexing always returns the true nearest neighbor for all queries.", options: ["A) True", "B) False"], answer: "B" },
  { id: 128, type: 'tf', question: "Spark's DAG scheduler breaks jobs into stages separated by shuffle boundaries.", options: ["A) True", "B) False"], answer: "A" },
  { id: 129, type: 'tf', question: "If you design keys by monotonically increasing timestamps, you risk hotspotting on the latest range.", options: ["A) True", "B) False"], answer: "A" },
  { id: 130, type: 'tf', question: "Kafka topics with replication factor >1 protect against broker failures.", options: ["A) True", "B) False"], answer: "A" },
  { id: 131, type: 'tf', question: "Mergeable sketches are universally better than exact data structures because they have no accuracy tradeoffs.", options: ["A) True", "B) False"], answer: "B" },
  { id: 132, type: 'tf', question: "Using compacted topics for changelog tables allows retaining the latest state per key indefinitely.", options: ["A) True", "B) False"], answer: "A" },
  { id: 133, type: 'tf', question: "When checkpointing is only local (not durable), recovery after node loss can still be guaranteed without replay.", options: ["A) True", "B) False"], answer: "B" },
  { id: 134, type: 'tf', question: "Designing data models for analytics often privileges denormalization to avoid expensive joins.", options: ["A) True", "B) False"], answer: "A" },
];
const QUESTIONS = [
  ...MCQ_DATA,
  ...TF_DATA
];